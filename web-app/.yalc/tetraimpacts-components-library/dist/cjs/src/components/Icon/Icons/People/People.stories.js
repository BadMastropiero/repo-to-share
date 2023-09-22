"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const People_1 = __importDefault(require("./People"));
exports.default = {
    title: 'Icons/People',
    component: People_1.default,
};
const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return ((0, jsx_runtime_1.jsx)(People_1.default, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    disabled: false,
    height: '24px',
    width: '31px',
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/', // TODO: Get the icon's url
    },
};
//# sourceMappingURL=People.stories.js.map