import {gql} from 'graphql-request';
import graphQLClient from './graphQlClient';

interface BlogEntry {
  mainImg: {
    title: string;
    url: string;
  };
  title: string;
  contentfulMetadata: {
    tags: {
      id: string;
      name: string;
    }[];
  };
  sys: {
    id: string;
  };
}

export interface BlogEntryMinimalData {
  // GraphQL contract
  slug: string;
  views: number;
  upvotes: number;
  keywords: string[];
  sys: {
    firstPublishedAt: string;
  };
  blogEntry: BlogEntry;
}

const getBlogsListMinData = async (
  locale: string = 'en-US',
  limit: number = 1
): Promise<{blogPostCollection: BlogEntryMinimalData[]}> => {
  // eslint-disable-next-line object-shorthand
  const queryVariables = {locale: locale, limit: limit};

  const getBlogsIDsCollectionGQL = gql`
    query getPublishedPostIDs($locale: String = "en-US", $limit: Int = 10) {
      blogPostCollection(locale: $locale, limit: $limit, order: slug_ASC) {
        total
        items {
          slug
          views
          upvotes
          keywords(locale: $locale)
          sys {
            firstPublishedAt
          }
          blogEntry(locale: $locale) {
            contentfulMetadata {
              tags {
                id
                name
              }
            }
            sys {
              id
            }
            title
            mainImg {
              title
              url
            }
          }
        }
      }
    }
  `;

  const {blogPostCollection} = await graphQLClient.request(
    getBlogsIDsCollectionGQL,
    queryVariables
  );

  return {blogPostCollection: blogPostCollection.items};
};

export default getBlogsListMinData;
