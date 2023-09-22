import {GraphQLClient} from 'graphql-request';
import {CONTENTFUL_API_URL} from '../config/serverConstants';

const graphQLClient = new GraphQLClient(CONTENTFUL_API_URL, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export default graphQLClient;
