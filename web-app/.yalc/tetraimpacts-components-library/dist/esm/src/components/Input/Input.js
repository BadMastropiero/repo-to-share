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
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
// Components
import MaskedInput from 'react-text-mask';
import { Typography } from '../Typography';
// Styles
import { StyledInput, InputWrapper, InputLabel, InputLabelWrapper } from './Input.styles';
import { Icon } from '../Icon';
const Input = (_a) => {
    var { primary, disabled = false, text, value: valueProp, onChange, className, required, mask: maskProp = false, maskPreset, afterIcon, afterComponent, labelLineNumbers } = _a, rest = __rest(_a, ["primary", "disabled", "text", "value", "onChange", "className", "required", "mask", "maskPreset", "afterIcon", "afterComponent", "labelLineNumbers"]);
    let mask = maskProp;
    const { input: inputTheme } = useContext(ThemeContext);
    if (inputTheme) {
        const maskPresetsTheme = inputTheme.maskPresets;
        if (maskPreset)
            mask = maskPresetsTheme[maskPreset] || false;
    }
    const [value, setValue] = useState(valueProp || '');
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const onInputChange = (e) => {
        setValue(e.target.value);
        if (onChange)
            onChange(e);
    };
    useEffect(() => {
        if (valueProp === value || !valueProp)
            return;
        setValue(valueProp);
    }, [valueProp]);
    return (_jsx(Typography, Object.assign({ style: { overflow: 'visible' }, fontSize: "20px", lineHeight: "200%", padding: "0" }, { children: _jsxs(InputWrapper, Object.assign({ disabled: disabled, primary: primary, className: "ti-input-wrapper" }, { children: [_jsxs(InputLabelWrapper, { children: [_jsx(MaskedInput, Object.assign({ mask: mask, className: `${value || value !== '' ? 'noEmpty' : ''} ${className || ''}`, disabled: disabled, value: valueProp, onChange: onInputChange, onFocus: () => {
                                setFocused(true);
                            }, onMouseEnter: () => {
                                setHovered(true);
                            }, onMouseLeave: () => {
                                setHovered(false);
                            }, onBlur: () => {
                                setFocused(false);
                            }, required: required }, rest, { render: (ref, _a) => {
                                var { defaultValue } = _a, restP = __rest(_a, ["defaultValue"]);
                                return (_jsx(StyledInput, Object.assign({ as: "input", ref: ref, "$primary": primary, value: valueProp, defaultValue: !valueProp && defaultValue ? defaultValue : undefined, type: "text" }, restP)));
                            } })), _jsxs(InputLabel, Object.assign({ lineNumbers: labelLineNumbers || 1, primary: primary, disabled: disabled, colorPreset: "disable", variant: "label", className: (!value || value === '') && !focused && !hovered ? 'as-placeholder' : '' }, { children: [text, " ", required && '*'] }))] }), afterIcon && _jsx(Icon, { primary: primary, icon: afterIcon }), afterComponent] })) })));
};
export default Input;
//# sourceMappingURL=Input.js.map