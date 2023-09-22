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
// Styles
import { CheckboxContainer, Icon, StyledCheckbox } from './Checkbox.styles';
const Checkbox = (_a) => {
    var { primary = false, checked, onChange, height = '20px', width = '20px', disabled } = _a, rest = __rest(_a, ["primary", "checked", "onChange", "height", "width", "disabled"]);
    return (_jsxs(CheckboxContainer, { children: [_jsx(StyledCheckbox, Object.assign({ primary: primary, type: "checkbox", checked: checked, onChange: onChange, height: height, width: width, disabled: disabled }, rest)), checked && _jsx(Icon, { primary: !primary, disabled: false, height: height, width: width })] }));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map