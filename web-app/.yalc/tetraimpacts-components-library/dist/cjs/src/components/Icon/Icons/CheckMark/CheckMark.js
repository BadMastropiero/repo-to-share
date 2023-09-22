"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IconBase_1 = __importDefault(require("../../IconBase"));
const CheckMark = ({ primary, customColor: color, disabled, width = '24px', height = '24px', className = '', }) => ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: `ticons-check_mark ${className}`, primary: primary, color: color, disabled: disabled, height: height, width: width, viewBox: "0 0 20 20" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M15 7.49999L8.76106 13.7389L5 9.97786L6.23894 8.73892L8.76106 11.261L13.7611 6.26105L15 7.49999Z" }) })));
exports.default = CheckMark;
//# sourceMappingURL=CheckMark.js.map