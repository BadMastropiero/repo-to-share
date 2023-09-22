import {gql} from 'graphql-request';
import {StaticSectionContent} from 'modules/landing/domain/contentful/types';
import graphQLClient from 'apiHandlers/graphQlClient';

const getStaticSectionContent = async (
  sectionType: string = 'generic',
  locale: string = 'en-US',
  limit: number = 1,
  order: string[] | null = null
  /*
   * Todo: Check the need of this prop if only 1 entry of
   * StaticSection in Contentful for each SectionType.
   */
): Promise<{staticSectionContent: StaticSectionContent[]}> => {
  // Setup the query variables to use the function args
  // const queryVariables = { "locale": locale, "limit": limit, "sectionType": sectionType };

  // eslint-disable-next-line object-shorthand
  const queryVariables = {locale: locale, limit: limit, sectionType: sectionType, order: order};

  const getStaticSectionContentGQL = gql`
    query staticSectionContent(
      $sectionType: String!
      $locale: String
      $limit: Int
      $order: [StaticSectionOrder]
    ) {
      staticSectionCollection(
        limit: $limit
        locale: $locale
        where: {sectionType: $sectionType}
        order: $order
      ) {
        items {
          title
          content {
            body
            subtitle
            mediaCollection {
              items {
                title
                mediaType
                img {
                  title
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const {staticSectionCollection} = await graphQLClient.request(
    getStaticSectionContentGQL,
    queryVariables
  );

  return {staticSectionContent: staticSectionCollection.items};
};

export default getStaticSectionContent;
