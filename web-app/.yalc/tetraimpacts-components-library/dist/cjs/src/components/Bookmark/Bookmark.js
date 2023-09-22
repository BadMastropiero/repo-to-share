"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
// Styles
const Bookmark_styles_1 = __importStar(require("./Bookmark.styles"));
// Components
const Icon_1 = require("../Icon");
const Typography_1 = require("../Typography");
const Bookmark = (_a) => {
    var { text, primary, beforeIcon, afterIcon, className, href, children, alwaysShowRibbon } = _a, rest = __rest(_a, ["text", "primary", "beforeIcon", "afterIcon", "className", "href", "children", "alwaysShowRibbon"]);
    const { colors } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    const showRightRibbon = afterIcon || alwaysShowRibbon === 'both' || alwaysShowRibbon === 'right';
    const showLeftRibbon = beforeIcon || alwaysShowRibbon === 'both' || alwaysShowRibbon === 'left';
    return ((0, jsx_runtime_1.jsxs)(Bookmark_styles_1.default, Object.assign({ as: Bookmark_styles_1.default, tag: href && 'link', href: href, primary: primary, className: `ti-bookmark ${className}` }, rest, { children: [showLeftRibbon && ((0, jsx_runtime_1.jsx)(Bookmark_styles_1.BmIconContainer, Object.assign({ primary: primary, className: "ti-bookmark-icon-container before" }, { children: beforeIcon && ((0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: beforeIcon, primary: !primary, width: "24px", height: "24px", className: "ti-bookmark-icon before" })) }))), text && ((0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ className: "ti-bookmark-text", customColor: primary ? colors.primaryBg : colors.primary, fontSize: "20px", fontStyle: "normal", fontWeight: "700", lineHeight: "200%", preset: "content", variant: "p", style: {
                    padding: '0 20px',
                    width: '100%',
                    alignSelf: 'center',
                } }, { children: text }))), children, showRightRibbon && ((0, jsx_runtime_1.jsx)(Bookmark_styles_1.BmIconContainer, Object.assign({ primary: primary, className: "ti-bookmark-icon-container after" }, { children: afterIcon && ((0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: afterIcon, primary: !primary, width: "24px", height: "24px", className: "ti-bookmark-icon after" })) })))] })));
};
exports.default = Bookmark;
//# sourceMappingURL=Bookmark.js.map