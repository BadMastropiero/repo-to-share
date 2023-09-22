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
// Styles
import Svg from './IconBase.styles';
const IconBase = (_a) => {
    var { primary, disabled, height, width, viewBox, children } = _a, rest = __rest(_a, ["primary", "disabled", "height", "width", "viewBox", "children"]);
    return (_jsx(Svg, Object.assign({ xmlns: "http://www.w3.org/2000/svg", role: "img", primary: primary, disabled: disabled, width: width, height: height, viewBox: viewBox }, rest, { children: children })));
};
export default IconBase;
//# sourceMappingURL=IconBase.js.map