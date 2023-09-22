"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
// Components
const react_text_mask_1 = __importDefault(require("react-text-mask"));
const Typography_1 = require("../Typography");
// Styles
const Input_styles_1 = require("./Input.styles");
const Icon_1 = require("../Icon");
const Input = (_a) => {
    var { primary, disabled = false, text, value: valueProp, onChange, className, required, mask: maskProp = false, maskPreset, afterIcon, afterComponent, labelLineNumbers } = _a, rest = __rest(_a, ["primary", "disabled", "text", "value", "onChange", "className", "required", "mask", "maskPreset", "afterIcon", "afterComponent", "labelLineNumbers"]);
    let mask = maskProp;
    const { input: inputTheme } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    if (inputTheme) {
        const maskPresetsTheme = inputTheme.maskPresets;
        if (maskPreset)
            mask = maskPresetsTheme[maskPreset] || false;
    }
    const [value, setValue] = (0, react_1.useState)(valueProp || '');
    const [focused, setFocused] = (0, react_1.useState)(false);
    const [hovered, setHovered] = (0, react_1.useState)(false);
    const onInputChange = (e) => {
        setValue(e.target.value);
        if (onChange)
            onChange(e);
    };
    (0, react_1.useEffect)(() => {
        if (valueProp === value || !valueProp)
            return;
        setValue(valueProp);
    }, [valueProp]);
    return ((0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ style: { overflow: 'visible' }, fontSize: "20px", lineHeight: "200%", padding: "0" }, { children: (0, jsx_runtime_1.jsxs)(Input_styles_1.InputWrapper, Object.assign({ disabled: disabled, primary: primary, className: "ti-input-wrapper" }, { children: [(0, jsx_runtime_1.jsxs)(Input_styles_1.InputLabelWrapper, { children: [(0, jsx_runtime_1.jsx)(react_text_mask_1.default, Object.assign({ mask: mask, className: `${value || value !== '' ? 'noEmpty' : ''} ${className || ''}`, disabled: disabled, value: valueProp, onChange: onInputChange, onFocus: () => {
                                setFocused(true);
                            }, onMouseEnter: () => {
                                setHovered(true);
                            }, onMouseLeave: () => {
                                setHovered(false);
                            }, onBlur: () => {
                                setFocused(false);
                            }, required: required }, rest, { render: (ref, _a) => {
                                var { defaultValue } = _a, restP = __rest(_a, ["defaultValue"]);
                                return ((0, jsx_runtime_1.jsx)(Input_styles_1.StyledInput, Object.assign({ as: "input", ref: ref, "$primary": primary, value: valueProp, defaultValue: !valueProp && defaultValue ? defaultValue : undefined, type: "text" }, restP)));
                            } })), (0, jsx_runtime_1.jsxs)(Input_styles_1.InputLabel, Object.assign({ lineNumbers: labelLineNumbers || 1, primary: primary, disabled: disabled, colorPreset: "disable", variant: "label", className: (!value || value === '') && !focused && !hovered ? 'as-placeholder' : '' }, { children: [text, " ", required && '*'] }))] }), afterIcon && (0, jsx_runtime_1.jsx)(Icon_1.Icon, { primary: primary, icon: afterIcon }), afterComponent] })) })));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map