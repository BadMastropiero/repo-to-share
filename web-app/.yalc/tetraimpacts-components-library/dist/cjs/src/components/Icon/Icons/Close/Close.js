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
const Close = (_a) => {
    var { primary, customColor, disabled, width = '24px', height = '24px', className } = _a, rest = __rest(_a, ["primary", "customColor", "disabled", "width", "height", "className"]);
    return ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: `ticons-close ${className}`, primary: primary, color: customColor, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, rest, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.05 13.85L7.27495 18.625C7.00828 18.8917 6.69162 19.025 6.32495 19.025C5.95828 19.025 5.64162 18.8917 5.37495 18.625C5.10828 18.3584 4.97495 18.046 4.97495 17.688C4.97495 17.3294 5.10828 17.0167 5.37495 16.75L10.175 11.95L5.34995 7.15002C5.08328 6.88336 4.94995 6.57502 4.94995 6.22502C4.94995 5.87502 5.08328 5.56669 5.34995 5.30002C5.61662 5.03336 5.92895 4.90002 6.28695 4.90002C6.64562 4.90002 6.95828 5.03336 7.22495 5.30002L12 10.05L16.725 5.32502C16.9916 5.05836 17.3083 4.92502 17.675 4.92502C18.0416 4.92502 18.3583 5.05836 18.625 5.32502C18.8916 5.59169 19.025 5.91236 19.025 6.28702C19.025 6.66236 18.8916 6.98336 18.625 7.25002L13.875 12.025L18.65 16.8C18.9 17.05 19.025 17.3584 19.025 17.725C19.025 18.0917 18.9 18.4 18.65 18.65C18.4 18.9 18.096 19.025 17.738 19.025C17.3793 19.025 17.075 18.9 16.825 18.65L12.05 13.85Z" }) })));
};
exports.default = Close;
//# sourceMappingURL=Close.js.map