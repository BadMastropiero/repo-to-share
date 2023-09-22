import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Typography } from '../../Typography';
import Button from '../../Button/Button';
// Styles
import HeaderContainer from './Header.styles';
import { ArrowDown, Icon, Translate } from '../../Icon';
const Header = ({ text, onClick, primary = false, disabled = false, placeholder = '', }) => {
    const { colors } = useContext(ThemeContext);
    return (_jsxs(HeaderContainer, Object.assign({ role: "menubar", primary: primary, disabled: disabled, onClick: disabled ? undefined : onClick }, { children: [_jsx(Typography // Placeholder
            , Object.assign({ colorPreset: "disable" // seems that is always same font color
                , fontSize: "12px", fontStyle: "normal", fontWeight: "500", lineHeight: "14px", preset: "content", variant: "p" }, { children: placeholder })), _jsx(Typography // Selection
            , Object.assign({ customColor: (primary && (disabled ? colors.primaryDark : colors.primaryBg)) ||
                    (disabled ? colors.primary100 : colors.primary), preset: "content", fontSize: "12px", fontStyle: "normal", fontWeight: "500", lineHeight: "14px", variant: "p", textAlign: "right" }, { children: text })), _jsx(Icon, { icon: Translate, primary: !primary, disabled: disabled, sizePreset: "normal" }), _jsx(Button
            // width="36px" height="36px"
            , { 
                // width="36px" height="36px"
                beforeIcon: ArrowDown, presetSize: "small", rounded: true, disabled: disabled, primary: primary })] })));
};
export default Header;
//# sourceMappingURL=Header.js.map