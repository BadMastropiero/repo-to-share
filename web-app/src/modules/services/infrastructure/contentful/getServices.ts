import {gql} from 'graphql-request';
import graphQLClient from 'apiHandlers/graphQlClient';

// Domain types
import CIService, {EServiceOrderBy} from 'modules/services/domain/types';

const mapServiceOrderBy = {
  [EServiceOrderBy.PRICE]: 'price',
  [EServiceOrderBy.CURRENCY]: 'currency',
  [EServiceOrderBy.FIRST_PUBLISHED_AT]: 'sys_firstPublishedAt',
  [EServiceOrderBy.TIMES_REQUESTED]: 'timesRequested',
};

async function getServices(
  locale: string = 'en-US',
  limit: number = 1,
  categoriesLimit = 6,
  orderBy: EServiceOrderBy | undefined = undefined
): Promise<{services: CIService[]; total: number}> {
  const queryVariables = {
    locale,
    limit,
    categoriesLimit,
    orderBy: orderBy && mapServiceOrderBy[orderBy] ? `${mapServiceOrderBy[orderBy]}_ASC` : null,
  };

  const getServicesGQL = gql`
    query serviceCollection(
      $limit: Int
      $categoriesLimit: Int
      $locale: String
      $orderBy: [ServiceOrder]
    ) {
      serviceCollection(locale: $locale, limit: $limit, order: $orderBy) {
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
              name
            }
          }
          coverImg {
            title
            url
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

  const {serviceCollection} = await graphQLClient.request(getServicesGQL, queryVariables);

  /* Custom service order implementation by slug */

  // Manually order by slug to show services
  const orderBySlug = [
    'shape-your-ideas',
    'shape-your-project',
    'shape-your-skills',
    'shape-yourself',
  ];

  const sortedServices: CIService[] = [];

  orderBySlug.forEach(item => {
    const service = serviceCollection.items.find(({slug}: CIService) => slug === item);
    if (service) {
      sortedServices.push(service);
    }
  });

  const services: CIService[] = sortedServices.concat(serviceCollection.items);

  const filteredServices: CIService[] = [];
  services.forEach(item => {
    if (!filteredServices.includes(item)) {
      filteredServices.push(item);
    }
  });

  /* End custom service order implementation */

  return {services: filteredServices, total: serviceCollection.total};
}

export default getServices;
