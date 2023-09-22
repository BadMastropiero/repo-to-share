"use strict";
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
const NavButton_styles_1 = require("./NavButton.styles");
// Components
const Icon_1 = require("../../Icon");
const Button_styles_1 = require("../Button.styles");
/**
 * NavButton component
 */
const NavButton = (_a) => {
    var { primary = false, icon = Icon_1.Tetraimpacts, iconComponent, className, href, highlight = false, isActive = false } = _a, rest = __rest(_a, ["primary", "icon", "iconComponent", "className", "href", "highlight", "isActive"]);
    const { colors } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return ((0, jsx_runtime_1.jsx)(NavButton_styles_1.StyledNavButton, Object.assign({ as: NavButton_styles_1.StyledNavButton, tag: href && 'link', href: href, className: `ti-navbutton ${className || ''}`, primary: primary, disable: rest.disabled, isActive: isActive, highlight: highlight, beforeIconComponent: iconComponent || ((0, jsx_runtime_1.jsx)(Button_styles_1.StyledIconContainer, Object.assign({ primary: primary, padding: "10px" }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: icon, primary: !primary, disabled: rest.disabled, customColor: primary ? colors.primaryBg : colors.primary }) }))) }, rest)));
};
exports.default = NavButton;
//# sourceMappingURL=NavButton.js.map