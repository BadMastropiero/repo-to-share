import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from '../Typography';
import { Checkbox } from '../Checkbox';
// Styles
import OptionContainer from './Option.styles';
const Option = ({ selected, text, onClick, primary = false, disabled = false, noCheckbox, }) => (_jsxs(OptionContainer, Object.assign({ role: "option", primary: primary, disabled: disabled, onClick: disabled ? undefined : onClick, noCheckbox: noCheckbox }, { children: [noCheckbox || _jsx(Checkbox, { checked: selected, primary: primary }), _jsx(Typography, Object.assign({ colorPreset: "disable" // seems that is always same font color
            , fontSize: "12px", fontStyle: "normal", fontWeight: selected ? '800' : '500', lineHeight: "14px", preset: "content", textTransform: "uppercase", textAlign: "right", variant: "p" }, { children: text }))] })));
export default Option;
//# sourceMappingURL=Option.js.map