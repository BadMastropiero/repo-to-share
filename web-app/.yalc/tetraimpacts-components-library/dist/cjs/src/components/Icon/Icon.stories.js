"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIcon = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("./Icon"));
const _1 = require(".");
exports.default = {
    title: 'Components/Icon',
    component: Icon_1.default,
};
const Base = args => {
    const { primary, customColor: color, disabled, height, width, sizePreset: size } = args;
    return ((0, jsx_runtime_1.jsx)(Icon_1.default, { primary: primary, customColor: color, disabled: disabled, height: height, width: width, sizePreset: size, icon: _1.PhoneInCall }));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    disabled: false,
    customColor: undefined,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1361',
    },
};
const BigIcon = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return ((0, jsx_runtime_1.jsx)(Icon_1.default, { primary: primary, customColor: color, disabled: disabled, height: height, width: width, sizePreset: "xl", icon: _1.PhoneInCall }));
};
exports.BigIcon = BigIcon;
exports.BigIcon.args = exports.Base.args;
exports.BigIcon.parameters = exports.Base.parameters;
//# sourceMappingURL=Icon.stories.js.map