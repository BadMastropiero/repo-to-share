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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
// Styles
import { StyledButton, StyledIconContainer, StyledTextButton } from './Button.styles';
// Components
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import Ripple from '../Ripple/Ripple';
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
    text: StyledTextButton,
    default: StyledButton,
};
const Button = (_a) => {
    var { primary = false, disabled = false, afterIcon, afterIconComponent, beforeIcon, beforeIconComponent, text, textStyle, presetSize = 'normal', rounded = true, className, presetType = 'default', style, href } = _a, rest = __rest(_a, ["primary", "disabled", "afterIcon", "afterIconComponent", "beforeIcon", "beforeIconComponent", "text", "textStyle", "presetSize", "rounded", "className", "presetType", "style", "href"]);
    const { colors } = useContext(ThemeContext);
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
    return (_jsxs(ButtonToRender, Object.assign({ tag: href ? 'link' : 'button', href: href, className: `ti-button ${className || ''}`, primary: primary, disabled: disabled, rounded: rounded, style: Object.assign({ textDecoration: href ? 'unset' : undefined, cursor: href ? 'pointer' : undefined, width: href ? 'fit-content' : undefined }, style) }, rest, { children: [beforeIcon && !beforeIconComponent && presetType !== 'text' && (_jsx(StyledIconContainer, Object.assign({ primary: primary, padding: presetSize ? mapSizeToIconPadding[presetSize] : undefined }, { children: _jsx(Icon, { icon: beforeIcon, primary: !primary, disabled: false, customColor: iconColor, sizePreset: (presetSize
                        ? mapSizeToIconSize[presetSize] || 'normalBtn'
                        : 'normalBtn') }) }))), beforeIconComponent, text && (_jsx(Typography, Object.assign({ variant: "p", customPreset: presetSize ? mapSizeToTypographyPreset[presetSize] || 'button' : 'button', customColor: textColor, style: textStyle }, { children: text }))), afterIcon && !afterIconComponent && presetType !== 'text' && (_jsx(StyledIconContainer, Object.assign({ primary: primary, padding: presetSize ? mapSizeToIconPadding[presetSize] : undefined }, { children: _jsx(Icon, { icon: afterIcon, primary: !primary, disabled: false, customColor: iconColor, sizePreset: (presetSize
                        ? mapSizeToIconSize[presetSize] || 'normalBtn'
                        : 'normalBtn') }) }))), afterIconComponent, _jsx(Ripple, { color: primary ? colors.primary200 : colors.primaryBg, duration: 1000 })] })));
};
export default Button;
//# sourceMappingURL=Button.js.map