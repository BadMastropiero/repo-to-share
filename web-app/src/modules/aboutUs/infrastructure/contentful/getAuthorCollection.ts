import {gql} from 'graphql-request';
import graphQLClient from 'apiHandlers/graphQlClient';

// Domain types
import CIAuthorCollection from 'modules/aboutUs/domain/types';

async function getAuthorCollection(
  tags: string = 'staff',
  locale: string = 'en-US',
  limit: number = 10
): Promise<{authorCollection: CIAuthorCollection[]}> {
  const queryVariables = {
    tags,
    locale,
    limit,
  };

  const getAuthorCollectionGQL = gql`
    query getAuthorCollection($tags: [String], $locale: String, $limit: Int = 10) {
      authorCollection(
        limit: $limit
        locale: $locale
        where: {contentfulMetadata: {tags: {id_contains_all: $tags}}}
      ) {
        items {
          name
          slug
          info {
            sys {
              id
            }
            email
            phone
            website
            socialMedia {
              linkedIn
              github
            }
          }
          shortBio
          avatar {
            title
            url
          }
        }
      }
    }
  `;

  const {authorCollection} = await graphQLClient.request(getAuthorCollectionGQL, queryVariables);

  return {authorCollection: authorCollection.items};
}

export default getAuthorCollection;
