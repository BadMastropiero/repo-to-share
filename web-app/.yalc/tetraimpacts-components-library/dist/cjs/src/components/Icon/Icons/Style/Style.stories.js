"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Style_1 = __importDefault(require("./Style"));
exports.default = {
    title: 'Icons/Style',
    component: Style_1.default,
};
const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return ((0, jsx_runtime_1.jsx)(Style_1.default, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    disabled: false,
    height: '24px',
    width: '24px',
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7698&t=CfMJO1c37mL1yFKy-4',
    },
};
//# sourceMappingURL=Style.stories.js.map