"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = require("../Typography");
const Checkbox_1 = require("../Checkbox");
// Styles
const Option_styles_1 = __importDefault(require("./Option.styles"));
const Option = ({ selected, text, onClick, primary = false, disabled = false, noCheckbox, }) => ((0, jsx_runtime_1.jsxs)(Option_styles_1.default, Object.assign({ role: "option", primary: primary, disabled: disabled, onClick: disabled ? undefined : onClick, noCheckbox: noCheckbox }, { children: [noCheckbox || (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { checked: selected, primary: primary }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "disable" // seems that is always same font color
            , fontSize: "12px", fontStyle: "normal", fontWeight: selected ? '800' : '500', lineHeight: "14px", preset: "content", textTransform: "uppercase", textAlign: "right", variant: "p" }, { children: text }))] })));
exports.default = Option;
//# sourceMappingURL=Option.js.map