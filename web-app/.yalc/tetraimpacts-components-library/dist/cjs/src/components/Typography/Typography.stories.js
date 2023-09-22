"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("./Typography"));
exports.default = {
    title: 'Atoms/Typography',
    component: Typography_1.default,
};
const Base = args => {
    const { text } = args;
    return (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({}, args, { children: text }));
};
exports.Base = Base;
const Content = () => ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ preset: "content", variant: "p" }, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." })));
exports.Content = Content;
exports.Base.args = {
    text: 'Test',
    variant: 'h1',
    preset: 'subtitle',
    colorPreset: 'primary',
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=6%3A2761',
    },
};
exports.Content.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=6%3A2791',
    },
};
//# sourceMappingURL=Typography.stories.js.map