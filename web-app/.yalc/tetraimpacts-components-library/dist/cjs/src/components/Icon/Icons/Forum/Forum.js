"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IconBase_1 = __importDefault(require("../../IconBase"));
const Forum = ({ primary, customColor: color, disabled, width = '24px', height = '24px', }) => ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: "ticons-forum", primary: primary, color: color, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0.949951 16.225V1.84995C0.949951 1.51662 1.05828 1.24162 1.27495 1.02495C1.49162 0.808284 1.76662 0.699951 2.09995 0.699951H16.35C16.6833 0.699951 16.9583 0.808284 17.1749 1.02495C17.3916 1.24162 17.5 1.51662 17.5 1.84995V12C17.5 12.3333 17.3916 12.6083 17.1749 12.825C16.9583 13.0416 16.6833 13.15 16.35 13.15H5.59995L2.04995 16.7C1.84995 16.9 1.61662 16.9416 1.34995 16.825C1.08328 16.7083 0.949951 16.5083 0.949951 16.225ZM6.74995 18.7C6.41662 18.7 6.14162 18.5916 5.92495 18.375C5.70828 18.1583 5.59995 17.8833 5.59995 17.5499V15.15H19.5V5.39995H21.9C22.2333 5.39995 22.5083 5.50828 22.725 5.72495C22.9416 5.94162 23.0499 6.21662 23.0499 6.54995V21.775C23.0499 22.0583 22.9166 22.2583 22.65 22.375C22.3833 22.4916 22.15 22.45 21.95 22.25L18.4 18.7H6.74995ZM14.85 3.34995H3.59995V10.5H14.85V3.34995Z" }) })));
exports.default = Forum;
//# sourceMappingURL=Forum.js.map