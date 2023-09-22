"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Dropdown_1 = __importDefault(require("./Dropdown"));
const optionsTesting_1 = __importDefault(require("./optionsTesting"));
exports.default = {
    title: 'Components/Dropdown',
    component: Dropdown_1.default,
};
const Base = args => {
    const { primary, disabled, placeholder, text, isMulti, isLoading, isClearable, isRtl, isSearchable, placeholderOut, renderSelected, } = args;
    const [selected, setSelected] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(Dropdown_1.default, { primary: primary, disabled: disabled, placeholder: placeholder, onClick: () => {
            setSelected(!selected);
        }, isMulti: isMulti, text: text, options: optionsTesting_1.default, defaultValue: [optionsTesting_1.default[0], optionsTesting_1.default[1]], isLoading: isLoading, isClearable: isClearable, isRtl: isRtl, isSearchable: isSearchable, placeholderOut: placeholderOut, renderSelected: renderSelected }));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    disabled: false,
    placeholder: 'Select...',
    isMulti: true,
    isLoading: false,
    isClearable: undefined,
    isRtl: undefined,
    isSearchable: undefined,
    placeholderOut: false,
    renderSelected: true,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        // url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1562',
    },
};
//# sourceMappingURL=Dropdown.stories.js.map