import {gql} from 'graphql-request';
import graphQLClient from './graphQlClient';

export interface MicrocopyCollection {
  // GraphQL contract
  key: string;
  text: string;
}

const getMicrocopyCollection = async (
  locale: string = 'en-US',
  limit: number = 1
): Promise<{microcopyCollection: MicrocopyCollection[]}> => {
  // Setup the query variables to use the function args
  // const queryVariables = { "locale": locale, "limit": limit, "sectionType": sectionType };

  // eslint-disable-next-line object-shorthand
  const queryVariables = {locale: locale, limit: limit};

  const getMicrocopyGQL = gql`
    query Microcopy($locale: String = "en-US", $limit: Int = 10) {
      microcopyCollection(locale: $locale, limit: $limit, order: key_ASC) {
        items {
          key
          text
        }
      }
    }
  `;

  const {microcopyCollection} = await graphQLClient.request(getMicrocopyGQL, queryVariables);

  return {microcopyCollection: microcopyCollection.items};
};

export default getMicrocopyCollection;
