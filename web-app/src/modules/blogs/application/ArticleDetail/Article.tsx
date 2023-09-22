import {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import {ThemeContext} from 'styled-components';
import {Button, Person, Pill, Typography} from 'tetraimpacts-components-library';

// Pages
import {pages} from 'config/pagesUrls';

// Components
import MenuBar from 'components/MenuBar/MenuBar';
import CommentsBox from 'components/CommentsBox/CommentsBox';
import ReactMarkdown from 'components/ReactMarkdown/ReactMarkdown';
import BlogStatistics from 'components/BlogStatistics/BlogStatistics';

// Domain types
import {FIComment} from 'modules/blogs/domain/contentful/types';

// Hooks
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';

// Styles
import {
  ArticleBody,
  ArticleInfo,
  AuthorContainer,
  ContentContainer,
  HeaderContainer,
  IllustrationContainer,
  StyledContainer,
  TagsContainer,
  UserInfo,
  Username,
} from './Article.styles';

// Intefaces
import IArticle from './Article.interface';

export default function Article({
  article: {
    mainImg,
    author,
    readingTime,
    views,
    createdDate,
    tags,
    title,
    summary,
    subtitle,
    body,
    slug,
  },
  comments,
  likes,
  isLiked,
  handleLike,
  sendComment,
}: IArticle) {
  const {t} = useTranslation();
  const router = useRouter();

  const {colors} = useContext(ThemeContext);
  const [allComments, setAllComents] = useState<FIComment[] | undefined>(undefined);
  const [indexContent, setIndexContent] = useState<{id: string; title: string}[]>([]);

  const handleFilterTag = (tag: string) => {
    const {query} = router;
    router.push(
      {
        pathname: pages.BLOGS,
        query: {
          ...query,
          tags: [tag]?.join() || null,
          page: 1,
        },
      },
      undefined,
      {scroll: true}
    );
  };

  useEffect(() => {
    if (comments?.length) {
      return setAllComents(comments);
    }
    return () => setAllComents(undefined);
  }, [comments]);

  useEffect(() => {
    // Define a regular expression to match against the current URL
    // TODO: improve the url matching
    const internalBlogSectionURL = /^.*\/blogs\/([a-z0-9-]+)(#)([a-z0-9-:"?]+)?$/i;

    // Check if the current URL matches the regular expression
    if (internalBlogSectionURL.test(router.asPath)) {
      // Change the scroll position to the top of the page
      window.scrollTo(0, window.scrollY - 100);
    }
  }, [router.asPath]);

  return (
    <StyledContainer>
      {/* *** HEADER *** */}
      <HeaderContainer>
        <IllustrationContainer>
          {mainImg.url && (
            <Image
              fill
              src={mainImg.url}
              alt={mainImg.title}
              style={{
                objectFit: 'contain',
              }}
              priority
              title={mainImg.title}
            />
          )}
        </IllustrationContainer>
        <ArticleInfo>
          <AuthorContainer>
            {author?.map(item => (
              <UserInfo key={item.name}>
                <Button
                  afterIconComponent={
                    item.avatar?.url ? (
                      <Image
                        height={32}
                        width={32}
                        src={`${item.avatar?.url}?w=32&h=32&fm=png`}
                        alt={item.name}
                      />
                    ) : (
                      <Person height="32px" width="32px" customColor={colors.primaryLight} />
                    )
                  }
                  style={{
                    height: '40px',
                    width: '40px',
                  }}
                  aria-label="author-avatar"
                />
                <Username customColor={colors.primary}>{item.name}</Username>
              </UserInfo>
            ))}
          </AuthorContainer>
          {/* BLOG STATISTICS */}
          <BlogStatistics
            allLikes={likes || 0}
            createdDate={createdDate}
            readingTime={readingTime || 0}
            shareUrl={`${pages.BLOGS}/${slug}`}
            title={title}
            views={views}
            isLiked={isLiked}
            handleLike={handleLike}
          />
        </ArticleInfo>
        {tags ? (
          <TagsContainer role="list">
            {tags.map(tag => (
              <Pill
                style={{cursor: 'pointer'}}
                key={tag}
                height="24px"
                text={t(tag) || ''}
                clickable
                onClick={() => handleFilterTag(tag)}
              />
            ))}
          </TagsContainer>
        ) : null}
      </HeaderContainer>
      {/* *** CONTENT *** */}
      <ContentContainer>
        <ArticleBody>
          <Typography
            customColor={colors.primary}
            style={{
              fontSize: '24px',
              lineHeight: '28px',
              fontWeight: '700',
            }}
          >
            {title}
          </Typography>
          {summary && (
            <Typography fontSize="14px" lineHeight="22px">
              {summary}
            </Typography>
          )}
          {subtitle && (
            <Typography
              customColor={colors.primary}
              style={{
                fontWeight: '700',
                fontSize: '16px',
                lineHeight: '18px',
              }}
            >
              {subtitle}
            </Typography>
          )}
          {/* ARTICLE BODY */}
          <ReactMarkdown content={body} setIndexContent={setIndexContent} />
        </ArticleBody>

        {/* *** MENU BAR *** */}
        <MenuBar options={indexContent} />

        {/* COMMENTS BOX */}
        <CommentsBox
          total={comments ? comments.length : 0}
          sendComment={sendComment}
          comments={
            allComments
              ? allComments.map(comment => ({
                  author: comment.author,
                  content: comment.content,
                  date: comment.created,
                  id: comment.id,
                }))
              : undefined
          }
        />
      </ContentContainer>
    </StyledContainer>
  );
}
