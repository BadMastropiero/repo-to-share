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
const Dots_styles_1 = require("./Dots.styles");
const Dots = (_a) => {
    var { value, setValue, ammount } = _a, rest = __rest(_a, ["value", "setValue", "ammount"]);
    const dotsToRender = [];
    for (let i = 0; i < ammount; i += 1) {
        dotsToRender.push((0, jsx_runtime_1.jsx)(Dots_styles_1.Dot, { className: i === Math.abs((ammount + (value % ammount)) % ammount)
                ? 'ti-dot ti-dot-selected'
                : 'ti-dot', selected: i === Math.abs((ammount + (value % ammount)) % ammount), onClick: setValue
                ? () => {
                    setValue(i);
                }
                : undefined }, i));
    }
    return ((0, jsx_runtime_1.jsx)(Dots_styles_1.Dots, Object.assign({ as: "div" }, rest, { children: dotsToRender })));
};
exports.default = Dots;
//# sourceMappingURL=Dots.js.map