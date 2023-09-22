import {gql} from 'graphql-request';
import graphQLClient from 'apiHandlers/graphQlClient';

// Domain types
import IJobPosition from 'modules/careers/domain/types';

async function getJobPositionCollection(
  locale: string = 'en-US',
  limit: number = 5500,
  slugFilter: string | null = null,
  tagsFilter: string[] | null = null
): Promise<{jobPositionCollection: IJobPosition[]; total: number}> {
  const queryVariables = {
    locale,
    limit,
    slugFilter,
    tagsFilter,
  };

  const getJobPositionCollectionGQL = gql`
    query getJobPositionsCollection(
      $locale: String
      $limit: Int
      $slugFilter: String
      $tagsFilter: [String]
    ) {
      jobPositionCollection(
        locale: $locale
        limit: $limit
        where: {slug: $slugFilter, contentfulMetadata: {tags: {id_contains_some: $tagsFilter}}}
      ) {
        total
        items {
          title
          slug
          coreResponsabilities
          jobProfile
          keyQualifications
          perks
          contactInfo
          extraInfo
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
    getJobPositionCollectionGQL,
    queryVariables
  );

  return {jobPositionCollection: jobPositionCollection.items, total: jobPositionCollection.total};
}

export default getJobPositionCollection;
