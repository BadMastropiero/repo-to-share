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
import { StyledNavButton } from './NavButton.styles';
// Components
import { Icon, Tetraimpacts } from '../../Icon';
import { StyledIconContainer } from '../Button.styles';
/**
 * NavButton component
 */
const NavButton = (_a) => {
    var { primary = false, icon = Tetraimpacts, iconComponent, className, href, highlight = false, isActive = false } = _a, rest = __rest(_a, ["primary", "icon", "iconComponent", "className", "href", "highlight", "isActive"]);
    const { colors } = useContext(ThemeContext);
    return (_jsx(StyledNavButton, Object.assign({ as: StyledNavButton, tag: href && 'link', href: href, className: `ti-navbutton ${className || ''}`, primary: primary, disable: rest.disabled, isActive: isActive, highlight: highlight, beforeIconComponent: iconComponent || (_jsx(StyledIconContainer, Object.assign({ primary: primary, padding: "10px" }, { children: _jsx(Icon, { icon: icon, primary: !primary, disabled: rest.disabled, customColor: primary ? colors.primaryBg : colors.primary }) }))) }, rest)));
};
export default NavButton;
//# sourceMappingURL=NavButton.js.map