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
import StyledBookmark, { BmIconContainer } from './Bookmark.styles';
// Components
import { Icon } from '../Icon';
import { Typography } from '../Typography';
const Bookmark = (_a) => {
    var { text, primary, beforeIcon, afterIcon, className, href, children, alwaysShowRibbon } = _a, rest = __rest(_a, ["text", "primary", "beforeIcon", "afterIcon", "className", "href", "children", "alwaysShowRibbon"]);
    const { colors } = useContext(ThemeContext);
    const showRightRibbon = afterIcon || alwaysShowRibbon === 'both' || alwaysShowRibbon === 'right';
    const showLeftRibbon = beforeIcon || alwaysShowRibbon === 'both' || alwaysShowRibbon === 'left';
    return (_jsxs(StyledBookmark, Object.assign({ as: StyledBookmark, tag: href && 'link', href: href, primary: primary, className: `ti-bookmark ${className}` }, rest, { children: [showLeftRibbon && (_jsx(BmIconContainer, Object.assign({ primary: primary, className: "ti-bookmark-icon-container before" }, { children: beforeIcon && (_jsx(Icon, { icon: beforeIcon, primary: !primary, width: "24px", height: "24px", className: "ti-bookmark-icon before" })) }))), text && (_jsx(Typography, Object.assign({ className: "ti-bookmark-text", customColor: primary ? colors.primaryBg : colors.primary, fontSize: "20px", fontStyle: "normal", fontWeight: "700", lineHeight: "200%", preset: "content", variant: "p", style: {
                    padding: '0 20px',
                    width: '100%',
                    alignSelf: 'center',
                } }, { children: text }))), children, showRightRibbon && (_jsx(BmIconContainer, Object.assign({ primary: primary, className: "ti-bookmark-icon-container after" }, { children: afterIcon && (_jsx(Icon, { icon: afterIcon, primary: !primary, width: "24px", height: "24px", className: "ti-bookmark-icon after" })) })))] })));
};
export default Bookmark;
//# sourceMappingURL=Bookmark.js.map