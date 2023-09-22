import {gql} from 'graphql-request';
import {PositionTags} from 'modules/landing/domain/contentful/types';
import graphQLClient from 'apiHandlers/graphQlClient';

async function getJobCollectionTags(
  locale: string = 'en-US',
  limit: number = 5500
): Promise<{jobCollectionTags: PositionTags[]; total: number}> {
  const queryVariables = {
    locale,
    limit,
  };

  const getJobCollectionTagsGQL = gql`
    query getJobCollectionTags($limit: Int, $locale: String) {
      jobPositionCollection(limit: $limit, locale: $locale) {
        total
        items {
          contentfulMetadata {
            tags {
              id
              name
            }
          }
        }
      }
    }
  `;

  const {jobPositionCollection} = await graphQLClient.request(
    getJobCollectionTagsGQL,
    queryVariables
  );

  return {jobCollectionTags: jobPositionCollection.items, total: jobPositionCollection.total};
}

export default getJobCollectionTags;
