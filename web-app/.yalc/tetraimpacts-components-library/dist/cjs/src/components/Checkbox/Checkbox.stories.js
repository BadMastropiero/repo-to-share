"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Checkbox_1 = __importDefault(require("./Checkbox"));
exports.default = {
    title: 'Atoms/Checkbox',
    component: Checkbox_1.default,
};
const Base = args => {
    const [checked, setChecked] = (0, react_1.useState)(false);
    const { primary, width, height, disabled } = args;
    return ((0, jsx_runtime_1.jsx)(Checkbox_1.default, { height: height, width: width, disabled: disabled, primary: primary, checked: checked, onChange: () => {
            setChecked(!checked);
        } }));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    disabled: false,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1350',
    },
};
//# sourceMappingURL=Checkbox.stories.js.map