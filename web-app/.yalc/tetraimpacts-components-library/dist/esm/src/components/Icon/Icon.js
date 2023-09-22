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
import { presetSizes } from '../../styles';
const Icon = (_a) => {
    var { sizePreset: size = 'normal', icon: SelectedIcon, customColor } = _a, props = __rest(_a, ["sizePreset", "icon", "customColor"]);
    const newHeight = presetSizes[size].height;
    const newWidth = presetSizes[size].width;
    const newProps = Object.assign({}, props);
    newProps.height = props.height || newHeight;
    newProps.width = props.width || newWidth;
    return _jsx(SelectedIcon, Object.assign({ customColor: customColor }, newProps));
};
export default Icon;
//# sourceMappingURL=Icon.js.map