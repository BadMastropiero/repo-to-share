"use strict";
exports.__esModule = true;
var graphql_request_1 = require("graphql-request");
var serverConstants_1 = require("../config/serverConstants");
var graphQLClient = new graphql_request_1.GraphQLClient(serverConstants_1.CONTENTFUL_API_URL, {
    headers: {
        Authorization: "Bearer ".concat(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN)
    }
});
exports["default"] = graphQLClient;
