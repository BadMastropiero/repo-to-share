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
const IconBase_1 = __importDefault(require("../../IconBase"));
const MenuOpen = (_a) => {
    var { primary, customColor, disabled, width = '24px', height = '24px', className } = _a, rest = __rest(_a, ["primary", "customColor", "disabled", "width", "height", "className"]);
    return ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: `ticons-menu_open ${className}`, primary: primary, color: customColor, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, rest, { children: (0, jsx_runtime_1.jsx)("path", { d: "M19.9567 18.55C20.3233 18.55 20.6357 18.421 20.8937 18.163C21.1523 17.9043 21.2817 17.5917 21.2817 17.225C21.2817 16.8583 21.1523 16.546 20.8937 16.288C20.6357 16.0293 20.3233 15.9 19.9567 15.9H8.70668C8.34001 15.9 8.02734 16.0293 7.76868 16.288C7.51068 16.546 7.38168 16.8583 7.38168 17.225C7.38168 17.5917 7.51068 17.9043 7.76868 18.163C8.02734 18.421 8.34001 18.55 8.70668 18.55H19.9567ZM19.9567 13.3C20.3233 13.3 20.6357 13.1707 20.8937 12.912C21.1523 12.654 21.2817 12.3417 21.2817 11.975C21.2817 11.6083 21.1523 11.2957 20.8937 11.037C20.6357 10.779 20.3233 10.65 19.9567 10.65H11.8067C11.44 10.65 11.1273 10.779 10.8687 11.037C10.6107 11.2957 10.4817 11.6083 10.4817 11.975C10.4817 12.3417 10.6107 12.654 10.8687 12.912C11.1273 13.1707 11.44 13.3 11.8067 13.3H19.9567ZM19.9567 8.10001C20.3233 8.10001 20.6357 7.97068 20.8937 7.71201C21.1523 7.45401 21.2817 7.14168 21.2817 6.77501C21.2817 6.40835 21.1523 6.09568 20.8937 5.83701C20.6357 5.57901 20.3233 5.45001 19.9567 5.45001H8.70668C8.34001 5.45001 8.02734 5.57901 7.76868 5.83701C7.51068 6.09568 7.38168 6.40835 7.38168 6.77501C7.38168 7.14168 7.51068 7.45401 7.76868 7.71201C8.02734 7.97068 8.34001 8.10001 8.70668 8.10001H19.9567ZM5.88168 12L3.10668 14.725C2.84001 14.975 2.71068 15.2833 2.71868 15.65C2.72734 16.0167 2.85668 16.325 3.10668 16.575C3.35668 16.825 3.66501 16.95 4.03168 16.95C4.39834 16.95 4.70668 16.825 4.95668 16.575L8.65668 12.925C8.92334 12.675 9.05668 12.3667 9.05668 12C9.05668 11.6333 8.92334 11.325 8.65668 11.075L4.95668 7.42501C4.70668 7.17501 4.39834 7.05001 4.03168 7.05001C3.66501 7.05001 3.35668 7.17501 3.10668 7.42501C2.84001 7.69168 2.71068 8.00401 2.71868 8.36201C2.72734 8.72068 2.86501 9.02501 3.13168 9.27501L5.88168 12Z" }) })));
};
exports.default = MenuOpen;
//# sourceMappingURL=MenuOpen.js.map