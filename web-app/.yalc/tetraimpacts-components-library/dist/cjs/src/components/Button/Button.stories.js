"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = exports.Link = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("./Button"));
const Icon_1 = require("../Icon");
exports.default = {
    title: 'Components/Button',
    component: Button_1.default,
};
const Base = args => {
    const { primary, text, showAfter, showPrev, disabled, presetSize, onClick, rounded, presetType } = args;
    return ((0, jsx_runtime_1.jsx)(Button_1.default, { primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: showAfter ? Icon_1.ArrowRight : undefined, beforeIcon: showPrev ? Icon_1.ArrowLeft : undefined, presetSize: presetSize, rounded: rounded, presetType: presetType }));
};
exports.Base = Base;
const Link = args => {
    const { primary, text, showAfter, showPrev, disabled, presetSize, onClick, rounded, presetType } = args;
    return ((0, jsx_runtime_1.jsx)(Button_1.default, { href: "http://example.com", primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: showAfter ? Icon_1.ArrowRight : undefined, beforeIcon: showPrev ? Icon_1.ArrowLeft : undefined, presetSize: presetSize, rounded: rounded, presetType: presetType }));
};
exports.Link = Link;
const All = args => {
    const { primary, text, disabled, onClick, rounded } = args;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { display: 'flex', gap: '10px', alignItems: 'center' } }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: Icon_1.ArrowRight, presetSize: "large", rounded: rounded }), (0, jsx_runtime_1.jsx)(Button_1.default, { primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: Icon_1.ArrowRight, presetSize: "normal", rounded: rounded }), (0, jsx_runtime_1.jsx)(Button_1.default, { primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: Icon_1.ArrowRight, presetSize: "small", rounded: rounded })] })));
};
exports.All = All;
exports.Base.args = {
    primary: true,
    disabled: false,
    text: 'Button',
    showAfter: true,
    showPrev: false,
    presetSize: 'large',
    onClick: () => { },
    rounded: true,
};
exports.Link.args = {
    primary: true,
    disabled: false,
    text: 'Button',
    showAfter: true,
    showPrev: false,
    presetSize: 'large',
    onClick: () => { },
    rounded: true,
};
exports.All.args = {
    primary: true,
    disabled: false,
    text: 'Button',
    onClick: () => { },
    rounded: true,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1157',
    },
};
exports.All.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1157',
    },
};
//# sourceMappingURL=Button.stories.js.map