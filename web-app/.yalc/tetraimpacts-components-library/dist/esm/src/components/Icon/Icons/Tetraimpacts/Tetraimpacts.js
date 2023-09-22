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
import IconBase from '../../IconBase';
const Tetraimpacts = (_a) => {
    var { primary, customColor, disabled, width = '24px', height = '24px', className } = _a, rest = __rest(_a, ["primary", "customColor", "disabled", "width", "height", "className"]);
    return (_jsx(IconBase, Object.assign({ className: `ticons-tetraimpacts ${className}`, primary: primary, color: customColor, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, rest, { children: _jsx("path", { d: "M15.8262 1.79206C17.3391 0.522602 19.6457 1.59819 19.6457 3.57311L19.6457 20.4048C19.6457 22.5755 16.935 23.5621 15.5397 21.8993L11.1914 16.7174L4.4268 16.7174C2.25618 16.7174 1.26951 14.0066 2.93233 12.6114L15.8262 1.79206ZM16.9957 4.27007L5.31973 14.0674L11.343 14.0674C12.0302 14.0675 12.6822 14.3715 13.124 14.8979L16.9957 19.5119L16.9957 4.27007Z" }) })));
};
export default Tetraimpacts;
//# sourceMappingURL=Tetraimpacts.js.map