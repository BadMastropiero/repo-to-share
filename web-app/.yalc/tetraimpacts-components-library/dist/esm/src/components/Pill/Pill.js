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
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import PillBase from './PillBase';
const Pill = (_a) => {
    var { text, onAfterIconClick, removable, clickable, primary, disabled, beforeIcon, afterIcon, onClick, afterIconStyles } = _a, rest = __rest(_a, ["text", "onAfterIconClick", "removable", "clickable", "primary", "disabled", "beforeIcon", "afterIcon", "onClick", "afterIconStyles"]);
    const { colors } = useContext(ThemeContext);
    return (_jsxs(PillBase, Object.assign({ primary: primary, disabled: disabled, onClick: !clickable || disabled ? undefined : onClick }, rest, { children: [beforeIcon && (_jsx(Icon, { icon: beforeIcon, primary: !primary, disabled: disabled, width: "14px", height: "14px" })), _jsx(Typography, Object.assign({ customColor: (disabled && colors.primaryLight) || (primary ? colors.primaryBg : colors.primary), fontSize: "12px", fontStyle: "normal", fontWeight: "500", lineHeight: "14px", preset: "content", variant: "p", style: { userSelect: 'none' } }, { children: text })), afterIcon && (_jsx(Icon, { icon: afterIcon, style: afterIconStyles, primary: !primary, disabled: disabled, height: "10px", width: "10px", onClick: disabled ? undefined : onAfterIconClick }))] })));
};
export default Pill;
//# sourceMappingURL=Pill.js.map