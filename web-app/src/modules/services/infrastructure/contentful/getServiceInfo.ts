import {gql} from 'graphql-request';
import graphQLClient from 'apiHandlers/graphQlClient';

// Domain types
import CIService from 'modules/services/domain/types';

async function getServiceInfo(
  locale: string = 'en-US',
  limit: number = 1,
  categoriesLimit = 6,
  slugFilter: string = ''
): Promise<{services: CIService[]; total: number}> {
  const queryVariables = {
    locale,
    limit,
    categoriesLimit,
    slugFilter,
  };

  const getServiceInfoGQL = gql`
    query serviceCollection(
      $limit: Int
      $categoriesLimit: Int
      $locale: String
      $slugFilter: String
    ) {
      serviceCollection(locale: $locale, limit: $limit, where: {slug: $slugFilter}) {
        total
        items {
          sys {
            id
          }
          title
          shortDescription
          detailedInfo
          slug
          price
          currency
          categoriesCollection(limit: $categoriesLimit, locale: $locale) {
            items {
              sys {
                id
              }
              name
              description
              objective
            }
          }
          cardImg {
            title
            url
          }
          provider {
            name
            slug
            providerType {
              name
              description
            }
            contactInfo {
              email
              phone
              website
              address
            }
          }
        }
      }
    }
  `;

  const {serviceCollection} = await graphQLClient.request(getServiceInfoGQL, queryVariables);

  return {services: serviceCollection.items, total: serviceCollection.total};
}

export default getServiceInfo;
