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
const react_1 = require("react");
const styled_components_1 = require("styled-components");
// Styles
const Typography_styles_1 = require("./Typography.styles");
const Typography = (_a) => {
    var { children, variant, colorPreset, preset: initialPreset = 'content', customColor, customPreset } = _a, rest = __rest(_a, ["children", "variant", "colorPreset", "preset", "customColor", "customPreset"]);
    const color = customColor || colorPreset;
    const preset = customPreset || initialPreset;
    const theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    const { typography } = theme;
    const presets = typography === null || typography === void 0 ? void 0 : typography.presets;
    const selectedPreset = presets && preset ? presets[preset] : null;
    let mergedTypographyBaseTheme = Object.assign(Object.assign(Object.assign({}, typography === null || typography === void 0 ? void 0 : typography.base), selectedPreset), rest);
    if (color)
        mergedTypographyBaseTheme = Object.assign(Object.assign({}, mergedTypographyBaseTheme), { color });
    if (selectedPreset) {
        return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, Object.assign({ theme: Object.assign(Object.assign({}, theme), { typography: Object.assign(Object.assign({}, typography), { base: mergedTypographyBaseTheme }) }) }, { children: (0, jsx_runtime_1.jsx)(Typography_styles_1.StyledTypography, Object.assign({ tag: variant }, rest, { children: children })) })));
    }
    return ((0, jsx_runtime_1.jsx)(Typography_styles_1.StyledTypography, Object.assign({ tag: variant }, rest, { children: children })));
};
exports.default = Typography;
//# sourceMappingURL=Typography.js.map