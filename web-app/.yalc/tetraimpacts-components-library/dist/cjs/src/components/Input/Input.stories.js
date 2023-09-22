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
exports.Number = exports.Email = exports.Phone = exports.WithButton = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("../Button");
const Icon_1 = require("../Icon");
const Input_1 = __importDefault(require("./Input"));
exports.default = {
    title: 'Components/Input',
    component: Input_1.default,
};
const Base = args => {
    const rest = __rest(args, []);
    return (0, jsx_runtime_1.jsx)(Input_1.default, Object.assign({}, rest));
};
exports.Base = Base;
exports.Base.args = {
    disabled: false,
    text: 'Write here',
    required: false,
    type: 'text',
    primary: true,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2838',
    },
};
const WithButton = () => ((0, jsx_runtime_1.jsx)(Input_1.default, { primary: true, text: "Your input with button", afterComponent: (0, jsx_runtime_1.jsx)(Button_1.Button, { style: {
            height: '36px',
            aspectRatio: 1,
        }, presetSize: "normal", afterIcon: Icon_1.Send, primary: true, rounded: true }) }));
exports.WithButton = WithButton;
const Phone = ({ value, onChange }) => ((0, jsx_runtime_1.jsx)(Input_1.default, { primary: true, type: "tel", text: "Your phone number", maskPreset: "phone", value: value, onChange: onChange }));
exports.Phone = Phone;
const Email = ({ value, onChange }) => ((0, jsx_runtime_1.jsx)(Input_1.default, { type: "tel", text: "Your e-mail address", required: true, maskPreset: "email", value: value, onChange: onChange, primary: true }));
exports.Email = Email;
const Number = ({ value, onChange }) => ((0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", text: "Your expected return", maskPreset: "number", value: value, onChange: onChange, primary: true }));
exports.Number = Number;
//# sourceMappingURL=Input.stories.js.map