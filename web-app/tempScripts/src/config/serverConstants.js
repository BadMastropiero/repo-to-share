"use strict";
exports.__esModule = true;
exports.CONTENTFUL_API_URL = void 0;
// Using dotenv to load variables during pre-scripts
var dotenv = require("dotenv");
dotenv.config();
dotenv.config({ path: ".env.development", override: true });
dotenv.config({ path: ".env.local", override: true });
// eslint-disable-next-line import/prefer-default-export
exports.CONTENTFUL_API_URL = "https://graphql.contentful.com/content/v1/spaces/".concat(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, "/environments/").concat(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ENV_ID, "/");
