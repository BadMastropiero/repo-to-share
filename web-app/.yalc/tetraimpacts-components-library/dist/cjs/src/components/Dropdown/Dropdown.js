"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const react_select_1 = __importStar(require("react-select"));
const Button_1 = require("../Button");
const Icon_1 = require("../Icon");
const Option_1 = require("../Option");
const Dropdown_styles_1 = require("./Dropdown.styles");
const Typography_1 = require("../Typography");
// TODO Maybe use this to animate the multivalues when closing
// const animatedComponents = makeAnimated();
const TiDropdownIndicator = (_a) => {
    var props = __rest(_a, []);
    return ((0, jsx_runtime_1.jsx)(react_select_1.components.DropdownIndicator, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, { beforeIcon: props.selectProps.menuIsOpen ? Icon_1.ArrowUp : Icon_1.ArrowDown, presetSize: "small", primary: props.selectProps.primary, disabled: props.isDisabled, rounded: true, text: "" }) })));
};
const TiIndicatorSeparator = ({ innerProps }) => ((0, jsx_runtime_1.jsx)("span", Object.assign({}, innerProps)));
const TiOption = (_a) => {
    var props = __rest(_a, []);
    return ((0, jsx_runtime_1.jsx)(react_select_1.components.Option, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(Option_1.Option, { primary: props.selectProps.primary, text: props.label, selected: props.isSelected, noCheckbox: !props.selectProps.optionWithCheckBox }) })));
};
const Dropdown = ({ name = 'ti-dropdown', disabled = false, primary = false, isMulti, defaultValue, isLoading = false, isClearable = false, isRtl = false, isSearchable = false, placeholder = 'Select..', options, menuIsOpen, closeMenuOnSelect = !isMulti, placeholderOut = false, renderSelected = false, setValue, value, }) => {
    const { colors, typography } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    const customStyles = (0, Dropdown_styles_1.getStyles)({ colors, typography });
    return ((0, jsx_runtime_1.jsxs)(Dropdown_styles_1.StyledDropdown, { children: [placeholderOut && ( // optional external placeholder
            (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "disable", preset: "label", variant: "p", style: { minWidth: 'min-content' } }, { children: placeholder }))), (0, jsx_runtime_1.jsx)(react_select_1.default, { closeMenuOnSelect: closeMenuOnSelect, components: {
                    DropdownIndicator: TiDropdownIndicator,
                    IndicatorSeparator: TiIndicatorSeparator,
                    Option: TiOption,
                }, options: options, isDisabled: disabled, isMulti: isMulti, defaultValue: defaultValue, isLoading: isLoading, isRtl: isRtl, isSearchable: isSearchable, name: name, placeholder: placeholderOut ? '' : placeholder, styles: customStyles, onChange: newValue => {
                    if (setValue)
                        setValue(newValue);
                }, value: value, menuIsOpen: menuIsOpen, primary: primary, controlShouldRenderValue: renderSelected, optionWithCheckBox: !renderSelected, isClearable: isClearable, backspaceRemovesValue: true, hideSelectedOptions: renderSelected })] }));
};
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map