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
const Typography_1 = require("../Typography");
const Icon_1 = require("../Icon");
const PillBase_1 = __importDefault(require("./PillBase"));
const Pill = (_a) => {
    var { text, onAfterIconClick, removable, clickable, primary, disabled, beforeIcon, afterIcon, onClick, afterIconStyles } = _a, rest = __rest(_a, ["text", "onAfterIconClick", "removable", "clickable", "primary", "disabled", "beforeIcon", "afterIcon", "onClick", "afterIconStyles"]);
    const { colors } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return ((0, jsx_runtime_1.jsxs)(PillBase_1.default, Object.assign({ primary: primary, disabled: disabled, onClick: !clickable || disabled ? undefined : onClick }, rest, { children: [beforeIcon && ((0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: beforeIcon, primary: !primary, disabled: disabled, width: "14px", height: "14px" })), (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ customColor: (disabled && colors.primaryLight) || (primary ? colors.primaryBg : colors.primary), fontSize: "12px", fontStyle: "normal", fontWeight: "500", lineHeight: "14px", preset: "content", variant: "p", style: { userSelect: 'none' } }, { children: text })), afterIcon && ((0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: afterIcon, style: afterIconStyles, primary: !primary, disabled: disabled, height: "10px", width: "10px", onClick: disabled ? undefined : onAfterIconClick }))] })));
};
exports.default = Pill;
//# sourceMappingURL=Pill.js.map