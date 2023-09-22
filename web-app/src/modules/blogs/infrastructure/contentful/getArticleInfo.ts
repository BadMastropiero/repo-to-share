import {gql} from 'graphql-request';
import graphQLClient from 'apiHandlers/graphQlClient';

// Domain types
import {CIArticle} from 'modules/blogs/domain/contentful/types';

async function getArticleInfo(
  locale: string = 'en-US',
  limit: number = 1,
  titleFilter: string = '',
  slugFilter: string = ''
): Promise<{articleInfo: CIArticle[]}> {
  const queryVariables = {
    locale,
    limit,
    titleFilter,
    slugFilter,
  };

  const getArticleInfoGQL = gql`
    query getArticleInfo(
      $limit: Int = 1
      $locale: String
      $titleFilter: String = ""
      $slugFilter: String = ""
    ) {
      blogPostCollection(
        limit: $limit
        where: {blogEntry: {title_contains: $titleFilter}, slug: $slugFilter}
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
            authorCollection(locale: $locale) {
              items {
                name
                avatar {
                  url
                }
              }
            }
            title
            subtitle
            body
            summary
            mainImg {
              title
              url
            }
          }
        }
      }
    }
  `;

  const {blogPostCollection} = await graphQLClient.request(getArticleInfoGQL, queryVariables);

  return {articleInfo: blogPostCollection.items};
}

export default getArticleInfo;
