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
const Info = (_a) => {
    var { primary, customColor, disabled, width = '24px', height = '24px', className } = _a, rest = __rest(_a, ["primary", "customColor", "disabled", "width", "height", "className"]);
    return ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: `ticons-info ${className}`, primary: primary, color: customColor, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, rest, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.025 17.4C12.3916 17.4 12.7043 17.2706 12.963 17.012C13.221 16.754 13.35 16.4416 13.35 16.075V12.3C13.35 11.9333 13.221 11.625 12.963 11.375C12.7043 11.125 12.3916 11 12.025 11C11.6583 11 11.346 11.129 11.088 11.387C10.8293 11.6456 10.7 11.9583 10.7 12.325V16.1C10.7 16.4666 10.8293 16.775 11.088 17.025C11.346 17.275 11.6583 17.4 12.025 17.4ZM12 8.59995C12.35 8.59995 12.6456 8.47928 12.887 8.23795C13.129 7.99595 13.25 7.69995 13.25 7.34995C13.25 6.99995 13.129 6.70395 12.887 6.46195C12.6456 6.22062 12.35 6.09995 12 6.09995C11.65 6.09995 11.3543 6.22062 11.113 6.46195C10.871 6.70395 10.75 6.99995 10.75 7.34995C10.75 7.69995 10.871 7.99595 11.113 8.23795C11.3543 8.47928 11.65 8.59995 12 8.59995ZM12 22.7999C10.5 22.7999 9.09562 22.5166 7.78695 21.95C6.47895 21.3833 5.33762 20.6126 4.36295 19.638C3.38762 18.6626 2.61662 17.5206 2.04995 16.212C1.48328 14.904 1.19995 13.5 1.19995 12C1.19995 10.5 1.48328 9.09162 2.04995 7.77495C2.61662 6.45828 3.38762 5.31262 4.36295 4.33795C5.33762 3.36262 6.47895 2.59562 7.78695 2.03695C9.09562 1.47895 10.5 1.19995 12 1.19995C13.5 1.19995 14.9083 1.47895 16.225 2.03695C17.5416 2.59562 18.6876 3.36262 19.663 4.33795C20.6376 5.31262 21.4039 6.45828 21.962 7.77495C22.5206 9.09162 22.7999 10.5 22.7999 12C22.7999 13.5 22.5206 14.904 21.962 16.212C21.4039 17.5206 20.6376 18.6626 19.663 19.638C18.6876 20.6126 17.5416 21.3833 16.225 21.95C14.9083 22.5166 13.5 22.7999 12 22.7999ZM12 20.15C14.2666 20.15 16.1916 19.3583 17.775 17.775C19.3583 16.1916 20.15 14.2666 20.15 12C20.15 9.73328 19.3583 7.80828 17.775 6.22495C16.1916 4.64162 14.2666 3.84995 12 3.84995C9.73328 3.84995 7.80828 4.64162 6.22495 6.22495C4.64162 7.80828 3.84995 9.73328 3.84995 12C3.84995 14.2666 4.64162 16.1916 6.22495 17.775C7.80828 19.3583 9.73328 20.15 12 20.15Z" }) })));
};
exports.default = Info;
//# sourceMappingURL=Info.js.map