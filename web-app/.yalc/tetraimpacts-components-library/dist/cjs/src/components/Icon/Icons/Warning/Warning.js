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
const Warning = (_a) => {
    var { primary, customColor, disabled, width = '24px', height = '24px', className } = _a, rest = __rest(_a, ["primary", "customColor", "disabled", "width", "height", "className"]);
    return ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: `ticons-warning ${className}`, primary: primary, color: customColor, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, rest, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.94995 22.0499C1.44995 22.0499 1.07495 21.8332 0.824951 21.3999C0.574951 20.9666 0.574951 20.5332 0.824951 20.0999L10.875 2.7999C11.125 2.36657 11.5 2.1499 12 2.1499C12.5 2.1499 12.875 2.36657 13.125 2.7999L23.1749 20.0999C23.4249 20.5332 23.4249 20.9666 23.1749 21.3999C22.9249 21.8332 22.5499 22.0499 22.0499 22.0499H1.94995ZM12.025 9.9999C11.6583 9.9999 11.346 10.1289 11.088 10.3869C10.8293 10.6456 10.7 10.9582 10.7 11.3249V13.7749C10.7 14.1416 10.8293 14.4539 11.088 14.7119C11.346 14.9706 11.6583 15.0999 12.025 15.0999C12.3916 15.0999 12.7043 14.9706 12.963 14.7119C13.221 14.4539 13.35 14.1416 13.35 13.7749V11.3249C13.35 10.9582 13.221 10.6456 12.963 10.3869C12.7043 10.1289 12.3916 9.9999 12.025 9.9999ZM12.025 18.6749C12.3916 18.6749 12.7043 18.5459 12.963 18.2879C13.221 18.0292 13.35 17.7166 13.35 17.3499C13.35 16.9832 13.221 16.6709 12.963 16.4129C12.7043 16.1542 12.3916 16.0249 12.025 16.0249C11.6583 16.0249 11.346 16.1542 11.088 16.4129C10.8293 16.6709 10.7 16.9832 10.7 17.3499C10.7 17.7166 10.8293 18.0292 11.088 18.2879C11.346 18.5459 11.6583 18.6749 12.025 18.6749ZM4.29995 19.3999H19.7L12 6.1499L4.29995 19.3999Z" }) })));
};
exports.default = Warning;
//# sourceMappingURL=Warning.js.map