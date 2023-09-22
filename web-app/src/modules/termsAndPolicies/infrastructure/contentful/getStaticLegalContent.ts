import {gql} from 'graphql-request';
import StaticTermsAndConditions from 'modules/termsAndPolicies/domain/types';
import graphQLClient from 'apiHandlers/graphQlClient';

const getStaticTermsAndPolicies = async (
  sectionType: string = 'generic',
  locale: string = 'en-US',
  limit: number = 1
  /*
   * Todo: Check the need of this prop if only 1 entry of
   * StaticSection in Contentful for each SectionType.
   */
): Promise<{staticLegalContent: StaticTermsAndConditions[]}> => {
  // Setup the query variables to use the function args
  // const queryVariables = { "locale": locale, "limit": limit, "sectionType": sectionType };

  // eslint-disable-next-line object-shorthand
  const queryVariables = {locale: locale, limit: limit, sectionType: sectionType};

  const getStaticTermsAndPoliciesGQL = gql`
    query staticSectionContent($sectionType: String!, $locale: String, $limit: Int) {
      staticSectionCollection(
        limit: $limit
        locale: $locale
        where: {sectionType_contains: $sectionType}
      ) {
        items {
          title
          content {
            body
          }
        }
      }
    }
  `;

  const {staticSectionCollection} = await graphQLClient.request(
    getStaticTermsAndPoliciesGQL,
    queryVariables
  );

  return {staticLegalContent: staticSectionCollection.items};
};

export default getStaticTermsAndPolicies;
