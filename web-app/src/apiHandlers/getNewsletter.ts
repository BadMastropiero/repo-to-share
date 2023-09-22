import {gql} from 'graphql-request';
import graphQLClient from './graphQlClient';

type ContentfulImg = {
  title: string;
  url: string;
  description: string;
};

type ContentfulButton = {
  label: string;
  link: string;
  slug?: string;
};

export interface Newsletter {
  sys: {
    firstPublishedAt: string;
  };
  contentfulMetadata: {
    tags: {
      id: string;
      name: string;
    }[];
  };
  coverImg: ContentfulImg;
  coverBackgroundImg: ContentfulImg;
  coverHeader: string;
  coverMessage: string;
  title: string;
  paragraphTop: string;
  buttonTop: ContentfulButton;
  paragraphBottom: string;
  buttonBottom: ContentfulButton;
  footerImg: ContentfulImg;
}

const getNewsletterById = async (
  id: string,
  locale: string = 'en-US'
): Promise<{newsletter: Newsletter}> => {
  const queryVariables = {
    id,
    locale,
  };

  if (!id) {
    throw new Error('Missing required field id');
  }

  const getNewsletterByIdGQL = gql`
    query getNewsletterById($id: String!, $locale: String!) {
      newsletter(id: $id, locale: $locale) {
        sys {
          firstPublishedAt
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
        coverImg {
          title
          description
          url
        }
        coverBackgroundImg {
          title
          description
          url
        }
        coverHeader
        coverMessage
        title
        paragraphTop
        buttonTop {
          label
          link
        }
        paragraphBottom
        buttonBottom {
          label
          link
        }
        footerImg {
          title
          description
          url
        }
      }
    }
  `;

  const newsletter = await graphQLClient.request(getNewsletterByIdGQL, queryVariables);

  return newsletter;
};

/**
 * Get the welcome email content
 * @param tags  Array including the tag used to mark the welcome email newsletter
 * @param locale  Locale of the newsletter content
 */
export const getWelcomeNewsletter = async (locale: string = 'en-US'): Promise<Newsletter> => {
  const queryVariables = {
    locale,
    tags: ['welcomeEmail'], // ! DO NOT MODIFY THIS ARRAY
  };

  const getWelcomeNewsletterGQL = gql`
    query getWelcomeNewsletter($tags: [String], $locale: String!) {
      newsletterCollection(
        limit: 1
        locale: $locale
        where: {contentfulMetadata: {tags: {id_contains_all: $tags}}}
      ) {
        items {
          sys {
            firstPublishedAt
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          coverImg {
            title
            description
            url
          }
          coverBackgroundImg {
            title
            description
            url
          }
          coverHeader
          coverMessage
          title
          paragraphTop
          buttonTop {
            label
            link
          }
          paragraphBottom
          buttonBottom {
            label
            link
          }
          footerImg {
            title
            description
            url
          }
        }
      }
    }
  `;

  const {newsletterCollection} = await graphQLClient.request(
    getWelcomeNewsletterGQL,
    queryVariables
  );

  // Because only one welcomeEmail tagged newsletter must exists...
  return newsletterCollection.items[0];
};

export default getNewsletterById;
