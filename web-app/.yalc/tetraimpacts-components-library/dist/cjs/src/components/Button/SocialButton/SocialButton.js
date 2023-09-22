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
const SocialButton_styles_1 = require("./SocialButton.styles");
// Components
const Icon_1 = require("../../Icon");
const Button_styles_1 = require("../Button.styles");
const mapSizeToIconPadding = {
    large: '20px',
    normal: '16px',
    small: '10px',
};
const mapSizeToIconSize = {
    large: 'largeBtn',
    normal: 'normalBtn',
    small: 'small',
};
/**
 * SocialButton component
 */
const SocialButton = (_a) => {
    var { primary = false, presetSize = 'large', rounded = true, icon = Icon_1.Facebook, iconComponent } = _a, rest = __rest(_a, ["primary", "presetSize", "rounded", "icon", "iconComponent"]);
    const { colors } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return ((0, jsx_runtime_1.jsx)(SocialButton_styles_1.StyledSocialButton
    // beforeIcon={icon}
    , Object.assign({ 
        // beforeIcon={icon}
        afterIconComponent: iconComponent || ((0, jsx_runtime_1.jsx)(Button_styles_1.StyledIconContainer, Object.assign({ primary: primary, padding: presetSize ? mapSizeToIconPadding[presetSize] : undefined }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: icon, primary: !primary, disabled: false, customColor: primary ? colors.primaryBg : colors.primary, sizePreset: (presetSize
                    ? mapSizeToIconSize[presetSize] || 'largeBtn'
                    : 'largeBtn') }) }))), primary: primary, rounded: rounded }, rest)));
};
exports.default = SocialButton;
//# sourceMappingURL=SocialButton.js.map