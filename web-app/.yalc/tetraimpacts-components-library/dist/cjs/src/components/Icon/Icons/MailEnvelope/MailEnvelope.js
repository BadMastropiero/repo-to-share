"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IconBase_1 = __importDefault(require("../../IconBase"));
const MailEnvelope = ({ primary, customColor: color, disabled, width = '24px', height = '24px', }) => ((0, jsx_runtime_1.jsx)(IconBase_1.default, Object.assign({ className: "ticons-mail_envelope", primary: primary, color: color, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.84995 20.75C3.11662 20.75 2.49162 20.4917 1.97495 19.975C1.45828 19.4583 1.19995 18.8333 1.19995 18.1V5.9C1.19995 5.16667 1.45828 4.54167 1.97495 4.025C2.49162 3.50833 3.11662 3.25 3.84995 3.25H20.15C20.8833 3.25 21.5083 3.50833 22.025 4.025C22.5416 4.54167 22.7999 5.16667 22.7999 5.9V18.1C22.7999 18.8333 22.5416 19.4583 22.025 19.975C21.5083 20.4917 20.8833 20.75 20.15 20.75H3.84995ZM20.15 8.6L12.675 13.15C12.575 13.2167 12.4666 13.2667 12.35 13.3C12.2333 13.3333 12.1166 13.35 12 13.35C11.8833 13.35 11.7666 13.3333 11.65 13.3C11.5333 13.2667 11.425 13.2167 11.325 13.15L3.84995 8.6V18.1H20.15V8.6ZM12 11L20.35 5.9H3.64995L12 11Z" }) })));
exports.default = MailEnvelope;
//# sourceMappingURL=MailEnvelope.js.map