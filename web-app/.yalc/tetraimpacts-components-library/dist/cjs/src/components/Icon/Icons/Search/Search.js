"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IconBase_1 = __importDefault(require("../../IconBase"));
const Search = ({ primary, customColor: color, disabled, width = '24px', height = '24px', }) => ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: "ticons-search", primary: primary, color: color, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M18.9 20.725L13.475 15.3C12.975 15.6833 12.3626 15.9873 11.638 16.212C10.9126 16.4373 10.175 16.55 9.42495 16.55C7.44162 16.55 5.76262 15.8626 4.38795 14.488C3.01262 13.1126 2.32495 11.4333 2.32495 9.44998C2.32495 7.46664 3.01262 5.78731 4.38795 4.41198C5.76262 3.03731 7.44162 2.34998 9.42495 2.34998C11.4083 2.34998 13.0876 3.03731 14.463 4.41198C15.8376 5.78731 16.525 7.46664 16.525 9.44998C16.525 10.2 16.421 10.9166 16.213 11.6C16.0043 12.2833 15.7 12.8916 15.3 13.425L20.775 18.9C21.025 19.15 21.15 19.45 21.15 19.8C21.15 20.15 21.0166 20.4583 20.75 20.725C20.5 20.975 20.1916 21.1 19.825 21.1C19.4583 21.1 19.15 20.975 18.9 20.725ZM9.42495 13.9C10.675 13.9 11.7293 13.4706 12.588 12.612C13.446 11.754 13.875 10.7 13.875 9.44998C13.875 8.19998 13.446 7.14564 12.588 6.28698C11.7293 5.42898 10.675 4.99998 9.42495 4.99998C8.17495 4.99998 7.12095 5.42898 6.26295 6.28698C5.40428 7.14564 4.97495 8.19998 4.97495 9.44998C4.97495 10.7 5.40428 11.754 6.26295 12.612C7.12095 13.4706 8.17495 13.9 9.42495 13.9Z" }) })));
exports.default = Search;
//# sourceMappingURL=Search.js.map