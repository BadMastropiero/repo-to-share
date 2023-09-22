"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = exports.Link = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SocialButton_1 = __importDefault(require("./SocialButton"));
const Icon_1 = require("../../Icon");
exports.default = {
    title: 'Components/SocialButton',
    component: SocialButton_1.default,
};
const Base = args => {
    const { primary, disabled, presetSize, onClick, rounded } = args;
    return ((0, jsx_runtime_1.jsx)(SocialButton_1.default, { primary: primary, disabled: disabled, onClick: onClick, presetSize: presetSize, rounded: rounded, icon: Icon_1.Instagram }));
};
exports.Base = Base;
const Link = args => {
    const { primary, disabled, presetSize, onClick, rounded } = args;
    return ((0, jsx_runtime_1.jsx)(SocialButton_1.default, { href: "https://example.com", primary: primary, disabled: disabled, onClick: onClick, presetSize: presetSize, rounded: rounded, icon: Icon_1.Instagram }));
};
exports.Link = Link;
const All = args => {
    const { primary, disabled, onClick, rounded } = args;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { display: 'flex', gap: '10px', alignItems: 'center' } }, { children: [(0, jsx_runtime_1.jsx)(SocialButton_1.default, { primary: primary, disabled: disabled, onClick: onClick, rounded: rounded, icon: Icon_1.Linkedin }), (0, jsx_runtime_1.jsx)(SocialButton_1.default, { primary: primary, disabled: disabled, onClick: onClick, rounded: rounded, icon: Icon_1.Instagram }), (0, jsx_runtime_1.jsx)(SocialButton_1.default, { primary: primary, disabled: disabled, onClick: onClick, rounded: rounded, icon: Icon_1.Facebook }), (0, jsx_runtime_1.jsx)(SocialButton_1.default, { primary: primary, disabled: disabled, onClick: onClick, rounded: rounded, icon: Icon_1.Twitter })] })));
};
exports.All = All;
exports.Base.args = {
    primary: true,
    disabled: false,
    presetSize: 'large',
    onClick: () => { },
    rounded: true,
};
exports.Link.args = {
    primary: true,
    disabled: false,
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
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2578%3A19454&t=0QjFHdLrz9OxRMPk-4',
    },
};
exports.All.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2578%3A19454&t=0QjFHdLrz9OxRMPk-4',
    },
};
//# sourceMappingURL=SocialButton.stories.js.map