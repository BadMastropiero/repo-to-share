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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// Styles
const Checkbox_styles_1 = require("./Checkbox.styles");
const Checkbox = (_a) => {
    var { primary = false, checked, onChange, height = '20px', width = '20px', disabled } = _a, rest = __rest(_a, ["primary", "checked", "onChange", "height", "width", "disabled"]);
    return ((0, jsx_runtime_1.jsxs)(Checkbox_styles_1.CheckboxContainer, { children: [(0, jsx_runtime_1.jsx)(Checkbox_styles_1.StyledCheckbox, Object.assign({ primary: primary, type: "checkbox", checked: checked, onChange: onChange, height: height, width: width, disabled: disabled }, rest)), checked && (0, jsx_runtime_1.jsx)(Checkbox_styles_1.Icon, { primary: !primary, disabled: false, height: height, width: width })] }));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map