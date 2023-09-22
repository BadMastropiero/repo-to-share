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
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
// Styles
import { StyledSocialButton } from './SocialButton.styles';
// Components
import { Facebook, Icon } from '../../Icon';
import { StyledIconContainer } from '../Button.styles';
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
    var { primary = false, presetSize = 'large', rounded = true, icon = Facebook, iconComponent } = _a, rest = __rest(_a, ["primary", "presetSize", "rounded", "icon", "iconComponent"]);
    const { colors } = useContext(ThemeContext);
    return (_jsx(StyledSocialButton
    // beforeIcon={icon}
    , Object.assign({ 
        // beforeIcon={icon}
        afterIconComponent: iconComponent || (_jsx(StyledIconContainer, Object.assign({ primary: primary, padding: presetSize ? mapSizeToIconPadding[presetSize] : undefined }, { children: _jsx(Icon, { icon: icon, primary: !primary, disabled: false, customColor: primary ? colors.primaryBg : colors.primary, sizePreset: (presetSize
                    ? mapSizeToIconSize[presetSize] || 'largeBtn'
                    : 'largeBtn') }) }))), primary: primary, rounded: rounded }, rest)));
};
export default SocialButton;
//# sourceMappingURL=SocialButton.js.map