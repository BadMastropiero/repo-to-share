import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Typography} from 'tetraimpacts-components-library';

// Pages
import {pages} from 'config/pagesUrls';

// Components
import BlogCard from 'components/BlogCard/BlogCard';

// Hooks
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import {useUserData} from 'contexts/UserData';

// Styles
import {ContentWrapper} from '../BlogsList/BlogsList.styles';
import {RelatedContentContainer, RelatedContentRibbon} from './RelatedContent.styles';

// Interfaces
import {Blog} from '../BlogsList/BlogsList.interface';

type RelatedContentProps = {
  relatedBlogs?: Blog[];
};

export default function RelatedContent({relatedBlogs}: RelatedContentProps) {
  const {t} = useTranslation();
  const router = useRouter();
  const {userData} = useUserData();

  const {colors} = useContext(ThemeContext);

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

  return (
    <RelatedContentRibbon>
      <RelatedContentContainer>
        <Typography
          customColor={colors.primary}
          style={{
            fontSize: '54px',
            fontFamily: 'Teko',
            lineHeight: '54px',
            fontWeight: '500',
            alignSelf: 'flex-start',
          }}
        >
          {t('related-content-text')}
        </Typography>
        <ContentWrapper>
          {relatedBlogs?.length !== 0 &&
            relatedBlogs?.map(blog => (
              <BlogCard
                primary
                id={blog.id}
                key={blog.id}
                date={blog.date}
                imageUrl={blog.mainImg.url}
                imageAlt={blog.mainImg.title}
                slug={blog.slug}
                title={blog.title}
                tags={blog.tags?.map(tag => tag)}
                views={blog.views}
                onPillClicked={handleFilterTag}
                likes={blog.favorites}
                likedByUser={!!userData?.blogsLiked?.find(bl => bl.slug === blog.slug)}
              />
            ))}
        </ContentWrapper>
      </RelatedContentContainer>
    </RelatedContentRibbon>
  );
}
