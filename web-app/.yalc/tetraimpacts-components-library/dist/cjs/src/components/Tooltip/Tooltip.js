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
const Tooltip_styles_1 = __importDefault(require("./Tooltip.styles"));
const Typography_1 = require("../Typography");
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
    const { colors, tooltip } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [children, (0, jsx_runtime_1.jsx)(Tooltip_styles_1.default, Object.assign({ primary: primary, place: place, id: id, effect: "solid", border: true, borderColor: "black", delayShow: delayShow, delayHide: delayHide, clickable: clickable, customBackColor: customBackColor, customBorderColor: customBorderColor, customShadowColor: customShadowColor, className: "ti-tooltip", role: "tooltip" }, rest, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "primary", customColor: (customTextColor && customTextColor) ||
                        (primary ? colors.primaryBg : tooltip.colors.tooltipText), fontFamily: "Roboto Flex", fontSize: "14px", fontWeight: "400", lineHeight: "18px", preset: "content", textAlign: "center", variant: "" }, { children: text })) }))] }));
};
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map