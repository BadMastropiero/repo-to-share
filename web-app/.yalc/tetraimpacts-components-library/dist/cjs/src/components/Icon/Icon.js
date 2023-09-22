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
const styles_1 = require("../../styles");
const Icon = (_a) => {
    var { sizePreset: size = 'normal', icon: SelectedIcon, customColor } = _a, props = __rest(_a, ["sizePreset", "icon", "customColor"]);
    const newHeight = styles_1.presetSizes[size].height;
    const newWidth = styles_1.presetSizes[size].width;
    const newProps = Object.assign({}, props);
    newProps.height = props.height || newHeight;
    newProps.width = props.width || newWidth;
    return (0, jsx_runtime_1.jsx)(SelectedIcon, Object.assign({ customColor: customColor }, newProps));
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map