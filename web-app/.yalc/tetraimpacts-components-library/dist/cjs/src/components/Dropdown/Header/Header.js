"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const Typography_1 = require("../../Typography");
const Button_1 = __importDefault(require("../../Button/Button"));
// Styles
const Header_styles_1 = __importDefault(require("./Header.styles"));
const Icon_1 = require("../../Icon");
const Header = ({ text, onClick, primary = false, disabled = false, placeholder = '', }) => {
    const { colors } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return ((0, jsx_runtime_1.jsxs)(Header_styles_1.default, Object.assign({ role: "menubar", primary: primary, disabled: disabled, onClick: disabled ? undefined : onClick }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography // Placeholder
            , Object.assign({ colorPreset: "disable" // seems that is always same font color
                , fontSize: "12px", fontStyle: "normal", fontWeight: "500", lineHeight: "14px", preset: "content", variant: "p" }, { children: placeholder })), (0, jsx_runtime_1.jsx)(Typography_1.Typography // Selection
            , Object.assign({ customColor: (primary && (disabled ? colors.primaryDark : colors.primaryBg)) ||
                    (disabled ? colors.primary100 : colors.primary), preset: "content", fontSize: "12px", fontStyle: "normal", fontWeight: "500", lineHeight: "14px", variant: "p", textAlign: "right" }, { children: text })), (0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: Icon_1.Translate, primary: !primary, disabled: disabled, sizePreset: "normal" }), (0, jsx_runtime_1.jsx)(Button_1.default
            // width="36px" height="36px"
            , { 
                // width="36px" height="36px"
                beforeIcon: Icon_1.ArrowDown, presetSize: "small", rounded: true, disabled: disabled, primary: primary })] })));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map