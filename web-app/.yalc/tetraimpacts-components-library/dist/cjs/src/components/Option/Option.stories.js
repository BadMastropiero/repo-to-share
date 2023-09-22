"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoCheckbox = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Option_1 = __importDefault(require("./Option"));
exports.default = {
    title: 'Components/Option',
    component: Option_1.default,
};
const Base = args => {
    const { primary, disabled, text, noCheckbox } = args;
    const [selected, setSelected] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(Option_1.default, { primary: primary, disabled: disabled, selected: selected, onClick: () => {
            setSelected(!selected);
        }, text: text, noCheckbox: noCheckbox }));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    disabled: false,
    text: 'Option1',
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1511',
    },
};
const NoCheckbox = args => {
    const { primary } = args;
    const [selected, setSelected] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(Option_1.default, { primary: primary, selected: selected, onClick: () => {
            setSelected(!selected);
        }, text: "No checkbox in here", noCheckbox: true }));
};
exports.NoCheckbox = NoCheckbox;
exports.NoCheckbox.args = {
    primary: true,
    disabled: false,
};
exports.NoCheckbox.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1511',
    },
};
//# sourceMappingURL=Option.stories.js.map