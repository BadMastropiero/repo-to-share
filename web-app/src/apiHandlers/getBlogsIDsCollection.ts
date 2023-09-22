import {gql} from 'graphql-request';
import graphQLClient from './graphQlClient';

export interface BlogsIDsCollection {
  // GraphQL contract
  slug: string;
  views: number;
  upvotes: number;
  sys: {
    id: string;
  };
}

const getBlogsIDsCollection = async (): Promise<{blogPostCollection: BlogsIDsCollection[]}> => {
  const getBlogsIDsCollectionGQL = gql`
    query getPublishedPostIDs {
      blogPostCollection {
        total
        items {
          slug
          views
          upvotes
          sys {
            id
          }
        }
      }
    }
  `;

  const {blogPostCollection} = await graphQLClient.request(getBlogsIDsCollectionGQL);

  return {blogPostCollection: blogPostCollection.items};
};

export default getBlogsIDsCollection;
