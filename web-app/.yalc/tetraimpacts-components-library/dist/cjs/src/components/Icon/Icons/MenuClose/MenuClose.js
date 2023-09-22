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
const MenuClose = (_a) => {
    var { primary, customColor, disabled, width = '24px', height = '24px', className } = _a, rest = __rest(_a, ["primary", "customColor", "disabled", "width", "height", "className"]);
    return ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: `ticons-menu_close ${className}`, primary: primary, color: customColor, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, rest, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.04332 18.55C3.67666 18.55 3.36432 18.421 3.10632 18.163C2.84766 17.9043 2.71832 17.5917 2.71832 17.225C2.71832 16.8583 2.84766 16.546 3.10632 16.288C3.36432 16.0293 3.67666 15.9 4.04332 15.9H15.2933C15.66 15.9 15.9727 16.0293 16.2313 16.288C16.4893 16.546 16.6183 16.8583 16.6183 17.225C16.6183 17.5917 16.4893 17.9043 16.2313 18.163C15.9727 18.421 15.66 18.55 15.2933 18.55H4.04332ZM4.04332 13.3C3.67666 13.3 3.36432 13.1707 3.10632 12.912C2.84766 12.654 2.71832 12.3417 2.71832 11.975C2.71832 11.6083 2.84766 11.2957 3.10632 11.037C3.36432 10.779 3.67666 10.65 4.04332 10.65H12.1933C12.56 10.65 12.8727 10.779 13.1313 11.037C13.3893 11.2957 13.5183 11.6083 13.5183 11.975C13.5183 12.3417 13.3893 12.654 13.1313 12.912C12.8727 13.1707 12.56 13.3 12.1933 13.3H4.04332ZM4.04332 8.10001C3.67666 8.10001 3.36432 7.97068 3.10632 7.71201C2.84766 7.45401 2.71832 7.14168 2.71832 6.77501C2.71832 6.40835 2.84766 6.09568 3.10632 5.83701C3.36432 5.57901 3.67666 5.45001 4.04332 5.45001H15.2933C15.66 5.45001 15.9727 5.57901 16.2313 5.83701C16.4893 6.09568 16.6183 6.40835 16.6183 6.77501C16.6183 7.14168 16.4893 7.45401 16.2313 7.71201C15.9727 7.97068 15.66 8.10001 15.2933 8.10001H4.04332ZM18.1183 12L20.8933 14.725C21.16 14.975 21.2893 15.2833 21.2813 15.65C21.2727 16.0167 21.1433 16.325 20.8933 16.575C20.6433 16.825 20.335 16.95 19.9683 16.95C19.6017 16.95 19.2933 16.825 19.0433 16.575L15.3433 12.925C15.0767 12.675 14.9433 12.3667 14.9433 12C14.9433 11.6333 15.0767 11.325 15.3433 11.075L19.0433 7.42501C19.2933 7.17501 19.6017 7.05001 19.9683 7.05001C20.335 7.05001 20.6433 7.17501 20.8933 7.42501C21.16 7.69168 21.2893 8.00401 21.2813 8.36201C21.2727 8.72068 21.135 9.02501 20.8683 9.27501L18.1183 12Z" }) })));
};
exports.default = MenuClose;
//# sourceMappingURL=MenuClose.js.map