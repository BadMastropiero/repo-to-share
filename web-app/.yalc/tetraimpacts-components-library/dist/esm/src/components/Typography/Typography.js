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
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
// Styles
import { StyledTypography } from './Typography.styles';
const Typography = (_a) => {
    var { children, variant, colorPreset, preset: initialPreset = 'content', customColor, customPreset } = _a, rest = __rest(_a, ["children", "variant", "colorPreset", "preset", "customColor", "customPreset"]);
    const color = customColor || colorPreset;
    const preset = customPreset || initialPreset;
    const theme = useContext(ThemeContext);
    const { typography } = theme;
    const presets = typography === null || typography === void 0 ? void 0 : typography.presets;
    const selectedPreset = presets && preset ? presets[preset] : null;
    let mergedTypographyBaseTheme = Object.assign(Object.assign(Object.assign({}, typography === null || typography === void 0 ? void 0 : typography.base), selectedPreset), rest);
    if (color)
        mergedTypographyBaseTheme = Object.assign(Object.assign({}, mergedTypographyBaseTheme), { color });
    if (selectedPreset) {
        return (_jsx(ThemeProvider, Object.assign({ theme: Object.assign(Object.assign({}, theme), { typography: Object.assign(Object.assign({}, typography), { base: mergedTypographyBaseTheme }) }) }, { children: _jsx(StyledTypography, Object.assign({ tag: variant }, rest, { children: children })) })));
    }
    return (_jsx(StyledTypography, Object.assign({ tag: variant }, rest, { children: children })));
};
export default Typography;
//# sourceMappingURL=Typography.js.map