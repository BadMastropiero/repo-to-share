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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
// Styles
import StyledTooltip from './Tooltip.styles';
import { Typography } from '../Typography';
const Tooltip = (_a) => {
    var { children, 
    /**
     * TODO Use id to cloneChildren with something like `data-for={id}` and set
     * it on StyledTooltip id, so children and ReactTooltip can be bound properly
     */
    id, 
    /** The value of the main theme */
    primary = false, 
    /** The text that will be shown in the tooltip */
    text, 
    /** Preferred position of the tooltip, auto-overridden if edge conflicts */
    place, 
    /** Time for showing the tooltip */
    delayShow = 500, 
    /** Time for hiding the tooltip */
    delayHide = 500, 
    // TODO Use the type to change the theme colors (if defined)
    /** Set the inner color theme of the tooltip */
    // type = 'dark',
    /** Prevent click events to be received in children */
    clickable = false, 
    /** Tooltip's text color */
    customTextColor, 
    /** Tooltip's background color */
    customBackColor, 
    /** Tooltip's border color */
    customBorderColor, 
    /** Tooltip's box-shadow color (rgba format recommended) */
    customShadowColor } = _a, rest = __rest(_a, ["children", "id", "primary", "text", "place", "delayShow", "delayHide", "clickable", "customTextColor", "customBackColor", "customBorderColor", "customShadowColor"]);
    const { colors, tooltip } = useContext(ThemeContext);
    return (_jsxs(_Fragment, { children: [children, _jsx(StyledTooltip, Object.assign({ primary: primary, place: place, id: id, effect: "solid", border: true, borderColor: "black", delayShow: delayShow, delayHide: delayHide, clickable: clickable, customBackColor: customBackColor, customBorderColor: customBorderColor, customShadowColor: customShadowColor, className: "ti-tooltip", role: "tooltip" }, rest, { children: _jsx(Typography, Object.assign({ colorPreset: "primary", customColor: (customTextColor && customTextColor) ||
                        (primary ? colors.primaryBg : tooltip.colors.tooltipText), fontFamily: "Roboto Flex", fontSize: "14px", fontWeight: "400", lineHeight: "18px", preset: "content", textAlign: "center", variant: "" }, { children: text })) }))] }));
};
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map