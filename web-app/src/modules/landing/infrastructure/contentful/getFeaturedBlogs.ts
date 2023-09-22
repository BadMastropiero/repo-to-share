import {gql} from 'graphql-request';
import {FeaturedBlog, OrderBy} from 'modules/landing/domain/contentful/types';
import graphQLClient from 'apiHandlers/graphQlClient';

const maporderByToContenfulOrderable = {
  [OrderBy.DATE]: 'sys_firstPublishedAt',
  [OrderBy.READS]: 'views',
  [OrderBy.LIKES]: 'upvotes',
};

async function getFeaturedBlogs(
  locale: string = 'en-US',
  limit: number = 5,
  page: number = 1,
  titleFilter: string = '',
  orderBy: OrderBy | undefined = undefined,
  keywordFilter: string[] | null = null,
  tagsFilters: string[] | null = null
): Promise<{featuredBlogs: FeaturedBlog[]; total: number}> {
  const queryVariables = {
    locale,
    limit,
    skip: (page - 1) * limit,
    titleFilter,
    keywordFilter,
    orderBy:
      orderBy && maporderByToContenfulOrderable[orderBy]
        ? `${maporderByToContenfulOrderable[orderBy]}_DESC`
        : null,
    tags: tagsFilters,
  };

  const getFeaturedBlogsGQL = gql`
    query getFeaturedBlogs(
      $limit: Int
      $skip: Int
      $locale: String
      $titleFilter: String
      $keywordFilter: [String]
      $orderBy: [BlogPostOrder]
      $tags: [String]
    ) {
      blogPostCollection(
        limit: $limit
        skip: $skip
        locale: $locale
        where: {
          AND: [
            {
              blogEntry: {
                title_contains: $titleFilter
                contentfulMetadata: {tags: {id_contains_some: $tags}}
              }
            }
            {keywords_contains_some: $keywordFilter}
          ]
        }
        order: $orderBy
      ) {
        total
        items {
          views
          upvotes
          keywords(locale: $locale)
          slug
          sys {
            firstPublishedAt
          }
          blogEntry(locale: $locale) {
            sys {
              id
            }
            contentfulMetadata {
              tags {
                id
                name
              }
            }
            title
            subtitle
            mainImg {
              title
              url
            }
          }
        }
      }
    }
  `;

  const {blogPostCollection} = await graphQLClient.request(getFeaturedBlogsGQL, queryVariables);

  return {featuredBlogs: blogPostCollection.items, total: blogPostCollection.total};
}

export default getFeaturedBlogs;
