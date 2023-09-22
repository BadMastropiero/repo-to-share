import {ReactElement, useEffect, useRef, useState} from 'react';
import {GetStaticPaths, GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';

// Components
import Article from 'modules/blogs/application/ArticleDetail/Article';
import MetaInfo from 'components/MetaInfo/MetaInfo';
import {LoginModalLayout} from 'components/Navbar/UserAuthControl/UserAuthControl.styles';
import LoginCard from 'components/Navbar/UserAuthControl/LoginCard';
import RelatedContent from 'modules/blogs/application/RelatedBlogs/RelatedContent';

// Data handlers
import getArticleInfo from 'modules/blogs/infrastructure/contentful/getArticleInfo';
import getFeaturedBlogs from 'modules/landing/infrastructure/contentful/getFeaturedBlogs';

// Hooks
import useBlogPostViews from 'modules/blogs/infrastructure/hooks/useBlogPostViews';

// Config
import {defaultLanguage, supportedLanguages} from 'config/language';
import {markdownToTxt} from 'utils/markdown';

// Interfaces
import IArticle from 'modules/blogs/application/ArticleDetail/Article.interface';

// Domain interfaces
import {FIComment} from 'modules/blogs/domain/contentful/types';

// Utils
import articleInfoMapper from 'modules/blogs/infrastructure/articleInfoMapper';
import {getAllPostLikes, verifyBlogIsLiked} from 'modules/blogs/infrastructure/firestore/likes';

// Layout
import BaseLayout from 'layouts/BaseLayout';

// Firestore
import {collection, orderBy, query} from 'firebase/firestore';
import useFirestoreQuery from 'firebaseApp/hooks/useFirestoreQuery';
import {getFirestoreInstance} from 'firebaseApp/firebase';
import firestoreCommentToFIComment from 'modules/blogs/infrastructure/commentMapper';
import {FSComment} from 'modules/blogs/domain/firestore/types';
import useProvideAuth from 'firebaseApp/hooks/useAuth';
import {sendComment as sendCommentFSHandler} from 'modules/blogs/infrastructure/firestore/comments';
import {useUserData} from 'contexts/UserData';
import {apiUrls} from 'config/pagesUrls';
import {getAbsoluteUrl} from 'utils/routes';
import {axiosI} from 'apiHandlers/axiosI';
import {Blog} from 'modules/blogs/application/BlogsList/BlogsList.interface';
import {useRouter} from 'next/router';

export default function BlogDetail({article}: IArticle) {
  const {keywords, title} = article;

  const {user} = useProvideAuth();
  const {updateUserLikedBlogs} = useUserData();
  const firestoreInstance = getFirestoreInstance();
  const {t} = useTranslation();

  const views = useBlogPostViews(article.slug || '');

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [postLikes, setPostLikes] = useState<number>(0);
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const lang = useRouter().locale || defaultLanguage;

  const commentsQuery = useRef(
    query(
      collection(firestoreInstance, 'blogPosts', article.slug || '', 'comments'),
      orderBy('created', 'desc')
    )
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data, status, error} = useFirestoreQuery<FSComment[]>(commentsQuery.current);

  const blogIsLiked = async () => {
    if (!user || !article.slug) return;
    verifyBlogIsLiked(user, article.slug).then(res => setIsLiked(res));
  };

  const handleLikeLogic = () => {
    if (!user || !article.slug) return;
    updateUserLikedBlogs(article.slug, !isLiked).then(() => setIsLiked(!isLiked));
  };

  const getPostsLikes = async () => {
    if (!article.slug) return;
    getAllPostLikes(article.slug).then(res => setPostLikes(res));
  };

  const sendComment = (body: string) => {
    if (!user) {
      setModalLoginIsOpen(true);
      return false;
    }
    if (!article.slug) return false;
    sendCommentFSHandler(user, article.slug, body);
    return true;
  };

  useEffect(() => {
    getPostsLikes();
  }, [article.slug, isLiked]);

  useEffect(() => {
    blogIsLiked();
  }, [user, article.slug, isLiked]);

  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchData() {
      const axiosResponse = await axiosI().get(getAbsoluteUrl(apiUrls.RELATED_BLOGS), {
        params: {
          locale: lang,
          blogSlug: article.slug,
        },
      });
      setRelatedBlogs(axiosResponse.data.relatedBlogs);
    }
    fetchData();
  }, [lang]);

  return (
    <>
      <MetaInfo
        title={`${title} | ${t('app-meta-title')}`}
        description={markdownToTxt(article.summary || '')}
        imgUrl={`${article.mainImg.url}?fm=png&h=630&fit=fill`}
        twitterCardType="summary_large_image"
      >
        {keywords && <meta name="keywords" content={`${keywords.toString()}`} />}
      </MetaInfo>

      <div className="main-content navbar-distance">
        <Article
          sendComment={sendComment}
          // This is due initial page containing only views at app build time
          // so we update the counter in the client side
          article={{...article, views}}
          comments={data?.map(comment => firestoreCommentToFIComment(comment))}
          likes={postLikes}
          isLiked={isLiked}
          handleLike={handleLikeLogic}
        />
      </div>

      {relatedBlogs.length ? <RelatedContent relatedBlogs={relatedBlogs} /> : null}

      <LoginModalLayout
        isOpen={modalLoginIsOpen}
        setIsOpen={setModalLoginIsOpen}
        closeOnBackdropClick
      >
        <LoginCard
          user={user}
          title={t('sign-in-to-comment-message') || ''}
          onSocialNetworkLogin={() => {
            setModalLoginIsOpen(false);
          }}
          onSignUp={() => {
            // TODO: Implement sign up functionality
          }}
        />
      </LoginModalLayout>
    </>
  );
}

BlogDetail.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {total} = await getFeaturedBlogs(defaultLanguage, 1);
  const {featuredBlogs} = await getFeaturedBlogs(defaultLanguage, total);

  const paths: Array<string | {params: {blog: string}; locale?: string}> = [];

  for (let index = 0; index < total; index += 1) {
    const {slug} = featuredBlogs[index];
    supportedLanguages.forEach(lang => {
      paths.push({params: {blog: slug}, locale: lang});
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({locale, params}) => {
  const {blog} = params as {blog: string};
  const {articleInfo} = await getArticleInfo(locale, 1, '', blog);
  const {article} = await articleInfoMapper(articleInfo);

  // TODO: Fetch all comments from firebase
  const comments: FIComment[] = [];

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      article,
      comments,
    },
  };
};
