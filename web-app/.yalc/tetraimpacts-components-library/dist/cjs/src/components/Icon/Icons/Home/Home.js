"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IconBase_1 = __importDefault(require("../../IconBase"));
const Home = ({ primary, customColor: color, disabled, width = '24px', height = '24px', }) => ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: "ticons-home", primary: primary, color: color, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.05002 19H8.42502V12.675H15.575V19H17.95V10.05L12 5.59995L6.05002 10.05V19ZM6.05002 21.65C5.30002 21.65 4.67102 21.3956 4.16302 20.8869C3.65436 20.379 3.40002 19.75 3.40002 19V10.075C3.40002 9.65828 3.49169 9.26228 3.67502 8.88695C3.85836 8.51228 4.11669 8.19995 4.45002 7.94995L10.4 3.47495C10.6334 3.29162 10.8877 3.15828 11.163 3.07495C11.4377 2.99162 11.7167 2.94995 12 2.94995C12.2834 2.94995 12.5627 2.99162 12.838 3.07495C13.1127 3.15828 13.3667 3.29162 13.6 3.47495L19.55 7.94995C19.8834 8.19995 20.1417 8.51228 20.325 8.88695C20.5084 9.26228 20.6 9.65828 20.6 10.075V19C20.6 19.75 20.3457 20.379 19.837 20.8869C19.329 21.3956 18.7 21.65 17.95 21.65H12.925V15.325H11.075V21.65H6.05002Z" }) })));
exports.default = Home;
//# sourceMappingURL=Home.js.map