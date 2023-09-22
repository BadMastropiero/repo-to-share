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
import Communication from './Communication';
export default {
    title: 'Icons/Communication',
    component: Communication,
};
export const Base = args => {
    const { primary, disabled, height, width } = args, rest = __rest(args, ["primary", "disabled", "height", "width"]);
    return (_jsx(Communication, Object.assign({ primary: primary, disabled: disabled, height: height, width: width }, rest)));
};
Base.args = {
    primary: true,
    disabled: false,
    height: '24px',
    width: '28px',
    color: undefined,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2113%3A4112&t=DPFuYXEBKFZn5v64-4',
    },
};
//# sourceMappingURL=Communication.stories.js.map