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
const Timer = (_a) => {
    var { primary, customColor, disabled, width = '24px', height = '24px', className } = _a, rest = __rest(_a, ["primary", "customColor", "disabled", "width", "height", "className"]);
    return (_jsx(IconBase, Object.assign({ className: `ticons-timer ${className}`, primary: primary, color: customColor, disabled: disabled, height: height, width: width, viewBox: "0 0 24 24" }, rest, { children: _jsx("path", { d: "M10.025 3.09995C9.65831 3.09995 9.34598 2.97062 9.08798 2.71195C8.82931 2.45395 8.69998 2.14162 8.69998 1.77495C8.69998 1.40828 8.82931 1.09562 9.08798 0.836951C9.34598 0.578951 9.65831 0.449951 10.025 0.449951H13.975C14.3416 0.449951 14.6543 0.578951 14.913 0.836951C15.171 1.09562 15.3 1.40828 15.3 1.77495C15.3 2.14162 15.171 2.45395 14.913 2.71195C14.6543 2.97062 14.3416 3.09995 13.975 3.09995H10.025ZM12 14.85C12.3666 14.85 12.6793 14.7206 12.938 14.462C13.196 14.204 13.325 13.8916 13.325 13.525V9.57495C13.325 9.20828 13.196 8.89562 12.938 8.63695C12.6793 8.37895 12.3666 8.24995 12 8.24995C11.6333 8.24995 11.3206 8.37895 11.062 8.63695C10.804 8.89562 10.675 9.20828 10.675 9.57495V13.525C10.675 13.8916 10.804 14.204 11.062 14.462C11.3206 14.7206 11.6333 14.85 12 14.85ZM12 23.25C10.6666 23.25 9.41664 22.996 8.24998 22.488C7.08331 21.9793 6.06264 21.2876 5.18798 20.413C4.31264 19.5376 3.62064 18.5166 3.11198 17.35C2.60398 16.1833 2.34998 14.9333 2.34998 13.6C2.34998 12.2666 2.60398 11.0166 3.11198 9.84995C3.62064 8.68328 4.31264 7.66228 5.18798 6.78695C6.06264 5.91228 7.08331 5.22062 8.24998 4.71195C9.41664 4.20395 10.6666 3.94995 12 3.94995C13.05 3.94995 14.0626 4.10828 15.038 4.42495C16.0126 4.74162 16.925 5.21662 17.775 5.84995L18.525 5.09995C18.775 4.84995 19.0833 4.72062 19.45 4.71195C19.8166 4.70395 20.1333 4.83328 20.4 5.09995C20.6666 5.36662 20.8 5.67895 20.8 6.03695C20.8 6.39562 20.6666 6.70828 20.4 6.97495L19.65 7.72495C20.3333 8.62495 20.8376 9.56662 21.163 10.55C21.4876 11.5333 21.65 12.55 21.65 13.6C21.65 14.9333 21.396 16.1833 20.888 17.35C20.3793 18.5166 19.6873 19.5376 18.812 20.413C17.9373 21.2876 16.9166 21.9793 15.75 22.488C14.5833 22.996 13.3333 23.25 12 23.25ZM12 20.6C13.9333 20.6 15.5833 19.9166 16.95 18.5499C18.3166 17.1833 19 15.5333 19 13.6C19 11.6666 18.3166 10.0166 16.95 8.64995C15.5833 7.28328 13.9333 6.59995 12 6.59995C10.0666 6.59995 8.41664 7.28328 7.04998 8.64995C5.68331 10.0166 4.99998 11.6666 4.99998 13.6C4.99998 15.5333 5.68331 17.1833 7.04998 18.5499C8.41664 19.9166 10.0666 20.6 12 20.6Z" }) })));
};
export default Timer;
//# sourceMappingURL=Timer.js.map