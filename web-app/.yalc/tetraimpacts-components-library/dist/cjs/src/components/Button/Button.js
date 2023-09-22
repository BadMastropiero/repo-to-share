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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
// Styles
const Button_styles_1 = require("./Button.styles");
// Components
const Typography_1 = require("../Typography");
const Icon_1 = require("../Icon");
const Ripple_1 = __importDefault(require("../Ripple/Ripple"));
const mapSizeToTypographyPreset = {
    large: 'buttonLG',
    normal: 'button',
    small: 'buttonSM',
};
const mapSizeToIconPadding = {
    large: '14px',
    normal: '10px',
    small: '6px',
};
const mapSizeToIconSize = {
    large: 'normal',
    normal: 'normalBtn',
    small: 'small',
};
const mapPresetTypeToButtonType = {
    text: Button_styles_1.StyledTextButton,
    default: Button_styles_1.StyledButton,
};
const Button = (_a) => {
    var { primary = false, disabled = false, afterIcon, afterIconComponent, beforeIcon, beforeIconComponent, text, textStyle, presetSize = 'normal', rounded = true, className, presetType = 'default', style, href } = _a, rest = __rest(_a, ["primary", "disabled", "afterIcon", "afterIconComponent", "beforeIcon", "beforeIconComponent", "text", "textStyle", "presetSize", "rounded", "className", "presetType", "style", "href"]);
    const { colors } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    const ButtonToRender = mapPresetTypeToButtonType[presetType] || mapPresetTypeToButtonType.default;
    let textColor = 'secondary';
    if ((primary && presetType !== 'text') || (presetType === 'text' && !primary)) {
        textColor = disabled ? colors.primaryDark : 'secondary';
    }
    else {
        textColor = disabled ? colors.primary200 : colors.primaryDark;
    }
    let iconColor = null;
    if (primary) {
        iconColor = disabled ? colors.primary : null;
    }
    else {
        iconColor = disabled ? colors.primaryBg : colors.primary;
    }
    return ((0, jsx_runtime_1.jsxs)(ButtonToRender, Object.assign({ tag: href ? 'link' : 'button', href: href, className: `ti-button ${className || ''}`, primary: primary, disabled: disabled, rounded: rounded, style: Object.assign({ textDecoration: href ? 'unset' : undefined, cursor: href ? 'pointer' : undefined, width: href ? 'fit-content' : undefined }, style) }, rest, { children: [beforeIcon && !beforeIconComponent && presetType !== 'text' && ((0, jsx_runtime_1.jsx)(Button_styles_1.StyledIconContainer, Object.assign({ primary: primary, padding: presetSize ? mapSizeToIconPadding[presetSize] : undefined }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: beforeIcon, primary: !primary, disabled: false, customColor: iconColor, sizePreset: (presetSize
                        ? mapSizeToIconSize[presetSize] || 'normalBtn'
                        : 'normalBtn') }) }))), beforeIconComponent, text && ((0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ variant: "p", customPreset: presetSize ? mapSizeToTypographyPreset[presetSize] || 'button' : 'button', customColor: textColor, style: textStyle }, { children: text }))), afterIcon && !afterIconComponent && presetType !== 'text' && ((0, jsx_runtime_1.jsx)(Button_styles_1.StyledIconContainer, Object.assign({ primary: primary, padding: presetSize ? mapSizeToIconPadding[presetSize] : undefined }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: afterIcon, primary: !primary, disabled: false, customColor: iconColor, sizePreset: (presetSize
                        ? mapSizeToIconSize[presetSize] || 'normalBtn'
                        : 'normalBtn') }) }))), afterIconComponent, (0, jsx_runtime_1.jsx)(Ripple_1.default, { color: primary ? colors.primary200 : colors.primaryBg, duration: 1000 })] })));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map