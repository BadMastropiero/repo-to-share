import Head from 'next/head';

import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetServerSideProps} from 'next';

// Styles
import {StyledBlogsGlobalStyle} from 'modules/blogs/application/BlogsList/BlogsList.styles';

// Interfaces
import BlogsProps from 'modules/blogs/application/BlogsList/BlogsList.interface';
import type {ReactElement} from 'react';
import {OrderBy} from 'modules/landing/domain/contentful/types';

// Data handlers
// import getFeaturedBlogs from 'modules/landing/infrastructure/contentful/getFeaturedBlogs';
import getFeaturedBlogsLocally from 'modules/landing/infrastructure/getFeaturedBlogsLocally';

// Component
import BaseLayout from 'layouts/BaseLayout';
import BlogsList from 'modules/blogs/application/BlogsList/BlogsList';

// Hooks
import {useTranslation} from 'next-i18next';

// Utils
import {blogsSimpleMapper} from 'modules/landing/infrastructure/responseMappers';

// Config
import {defaultLanguage} from '../../../next-i18next.config';

const blogsToDisplay = 9;

export default function Blogs({
  blogs = [],
  totalBlogs,
  totalPages,
  page,
  searchTerm,
  orderBy,
  selectedTags,
}: BlogsProps) {
  const {t} = useTranslation();

  return (
    <div className="main-content navbar-distance">
      <Head>
        <title>Blogs | Tetraimpacts</title>
        <meta name="Blogs" content={`${t('blogs-page-meta-description')}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledBlogsGlobalStyle />
      <div className="app-container">
        <BlogsList
          selectedTags={selectedTags}
          blogs={blogs}
          page={+(page || 1)}
          totalBlogs={totalBlogs}
          totalPages={totalPages}
          searchTerm={searchTerm}
          orderBy={orderBy}
        />
      </div>
    </div>
  );
}

Blogs.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

// WARN LEFT FOR REFERENCE PURPOSES
// Generates all available pages
// export const getStaticPaths: GetStaticPaths<BlogPageParams> = async () => {
//   const {total} = await getFeaturedBlogs(defaultLanguage, 1); // fetching 1 for performance

//   const paths: Array<string | {params: BlogPageParams; locale?: string}> = [];

//   for (let i = 0; i < Math.ceil(total / blogsToDisplay); i += 1) {
//     supportedLanguages.forEach(lang => {
//       paths.push({params: {page: `${i + 1}`}, locale: lang});
//     });
//   }

//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({locale, query, res}) => {
  const page = +(query?.page || 1);
  const title = query?.title || null;
  const order = query?.order || null;
  const limit = +(query?.limit || blogsToDisplay);

  // Define the keywordFilter only if not empty in the url
  const keywordFilter = query?.keywords?.toString().length
    ? query?.keywords?.toString().split(',')
    : null;

  // Define the tagsFilter only if not empty in the url
  const tagsFilter = query?.tags?.toString().length ? query?.tags?.toString().split(',') : null;

  // *** Blogs Section Content *** //
  const {featuredBlogs, total} = await getFeaturedBlogsLocally(
    locale,
    limit,
    page,
    title as string,
    (order as unknown as OrderBy) || undefined,
    keywordFilter as string[],
    tagsFilter as string[]
  );

  const mappedFeaturedBlogs = blogsSimpleMapper(featuredBlogs);

  const selectedTags = tagsFilter?.map(tag => ({id: tag, text: tag})) || null;

  res.setHeader('Cache-Control', 'public, s-maxage=100, stale-while-revalidate=59');
  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      blogs: mappedFeaturedBlogs,
      totalBlogs: total,
      totalPages: Math.ceil(total / limit),
      page,
      searchTerm: title,
      orderBy: order,
      selectedTags,
    },
  };
};
