"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IconBase_1 = __importDefault(require("../../IconBase"));
const Send = ({ primary, customColor: color, disabled, width = '24px', height = '24px', }) => ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: "ticons-send", primary: primary, color: color, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.44995 18.5V5.35C2.44995 4.88334 2.64162 4.52067 3.02495 4.262C3.40828 4.004 3.81662 3.96667 4.24995 4.15L19.775 10.725C20.3083 10.9583 20.575 11.3583 20.575 11.925C20.575 12.4917 20.3083 12.8917 19.775 13.125L4.24995 19.7C3.81662 19.8833 3.40828 19.8457 3.02495 19.587C2.64162 19.329 2.44995 18.9667 2.44995 18.5ZM4.69995 17.05L16.8 11.9L4.69995 6.75V10.3L11.05 11.9L4.69995 13.5V17.05Z" }) })));
exports.default = Send;
//# sourceMappingURL=Send.js.map