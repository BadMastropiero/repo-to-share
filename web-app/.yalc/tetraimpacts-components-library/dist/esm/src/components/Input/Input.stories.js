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
import { Button } from '../Button';
import { Send } from '../Icon';
import Input from './Input';
export default {
    title: 'Components/Input',
    component: Input,
};
export const Base = args => {
    const rest = __rest(args, []);
    return _jsx(Input, Object.assign({}, rest));
};
Base.args = {
    disabled: false,
    text: 'Write here',
    required: false,
    type: 'text',
    primary: true,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2838',
    },
};
export const WithButton = () => (_jsx(Input, { primary: true, text: "Your input with button", afterComponent: _jsx(Button, { style: {
            height: '36px',
            aspectRatio: 1,
        }, presetSize: "normal", afterIcon: Send, primary: true, rounded: true }) }));
export const Phone = ({ value, onChange }) => (_jsx(Input, { primary: true, type: "tel", text: "Your phone number", maskPreset: "phone", value: value, onChange: onChange }));
export const Email = ({ value, onChange }) => (_jsx(Input, { type: "tel", text: "Your e-mail address", required: true, maskPreset: "email", value: value, onChange: onChange, primary: true }));
export const Number = ({ value, onChange }) => (_jsx(Input, { type: "text", text: "Your expected return", maskPreset: "number", value: value, onChange: onChange, primary: true }));
//# sourceMappingURL=Input.stories.js.map