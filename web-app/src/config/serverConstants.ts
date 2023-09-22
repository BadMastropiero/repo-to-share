// Using dotenv to load variables during pre-scripts
import * as dotenv from 'dotenv';

dotenv.config();
dotenv.config({path: `.env.development`, override: true});
dotenv.config({path: `.env.local`, override: true});

// eslint-disable-next-line import/prefer-default-export
export const CONTENTFUL_API_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ENV_ID}/`;
