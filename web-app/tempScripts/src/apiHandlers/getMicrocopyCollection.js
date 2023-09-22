"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var graphql_request_1 = require("graphql-request");
var graphQlClient_1 = require("./graphQlClient");
var getMicrocopyCollection = function (locale, limit) {
    if (locale === void 0) { locale = 'en-US'; }
    if (limit === void 0) { limit = 1; }
    return __awaiter(void 0, void 0, void 0, function () {
        var queryVariables, getMicrocopyGQL, microcopyCollection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryVariables = { locale: locale, limit: limit };
                    getMicrocopyGQL = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query Microcopy($locale: String = \"en-US\", $limit: Int = 10) {\n      microcopyCollection(locale: $locale, limit: $limit, order: key_ASC) {\n        items {\n          key\n          text\n        }\n      }\n    }\n  "], ["\n    query Microcopy($locale: String = \"en-US\", $limit: Int = 10) {\n      microcopyCollection(locale: $locale, limit: $limit, order: key_ASC) {\n        items {\n          key\n          text\n        }\n      }\n    }\n  "])));
                    return [4 /*yield*/, graphQlClient_1["default"].request(getMicrocopyGQL, queryVariables)];
                case 1:
                    microcopyCollection = (_a.sent()).microcopyCollection;
                    return [2 /*return*/, { microcopyCollection: microcopyCollection.items }];
            }
        });
    });
};
exports["default"] = getMicrocopyCollection;
var templateObject_1;
