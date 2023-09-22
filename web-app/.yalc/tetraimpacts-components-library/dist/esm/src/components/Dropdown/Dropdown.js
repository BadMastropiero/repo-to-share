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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Select, { components, } from 'react-select';
import { Button } from '../Button';
import { ArrowDown, ArrowUp } from '../Icon';
import { Option } from '../Option';
import { getStyles, StyledDropdown } from './Dropdown.styles';
import { Typography } from '../Typography';
// TODO Maybe use this to animate the multivalues when closing
// const animatedComponents = makeAnimated();
const TiDropdownIndicator = (_a) => {
    var props = __rest(_a, []);
    return (_jsx(components.DropdownIndicator, Object.assign({}, props, { children: _jsx(Button, { beforeIcon: props.selectProps.menuIsOpen ? ArrowUp : ArrowDown, presetSize: "small", primary: props.selectProps.primary, disabled: props.isDisabled, rounded: true, text: "" }) })));
};
const TiIndicatorSeparator = ({ innerProps }) => (_jsx("span", Object.assign({}, innerProps)));
const TiOption = (_a) => {
    var props = __rest(_a, []);
    return (_jsx(components.Option, Object.assign({}, props, { children: _jsx(Option, { primary: props.selectProps.primary, text: props.label, selected: props.isSelected, noCheckbox: !props.selectProps.optionWithCheckBox }) })));
};
const Dropdown = ({ name = 'ti-dropdown', disabled = false, primary = false, isMulti, defaultValue, isLoading = false, isClearable = false, isRtl = false, isSearchable = false, placeholder = 'Select..', options, menuIsOpen, closeMenuOnSelect = !isMulti, placeholderOut = false, renderSelected = false, setValue, value, }) => {
    const { colors, typography } = useContext(ThemeContext);
    const customStyles = getStyles({ colors, typography });
    return (_jsxs(StyledDropdown, { children: [placeholderOut && ( // optional external placeholder
            _jsx(Typography, Object.assign({ colorPreset: "disable", preset: "label", variant: "p", style: { minWidth: 'min-content' } }, { children: placeholder }))), _jsx(Select, { closeMenuOnSelect: closeMenuOnSelect, components: {
                    DropdownIndicator: TiDropdownIndicator,
                    IndicatorSeparator: TiIndicatorSeparator,
                    Option: TiOption,
                }, options: options, isDisabled: disabled, isMulti: isMulti, defaultValue: defaultValue, isLoading: isLoading, isRtl: isRtl, isSearchable: isSearchable, name: name, placeholder: placeholderOut ? '' : placeholder, styles: customStyles, onChange: newValue => {
                    if (setValue)
                        setValue(newValue);
                }, value: value, menuIsOpen: menuIsOpen, primary: primary, controlShouldRenderValue: renderSelected, optionWithCheckBox: !renderSelected, isClearable: isClearable, backspaceRemovesValue: true, hideSelectedOptions: renderSelected })] }));
};
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map