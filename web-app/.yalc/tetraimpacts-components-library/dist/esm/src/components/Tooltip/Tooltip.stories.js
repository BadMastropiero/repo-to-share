import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import {ArrowLeft, Icon} from '../Icon';
import Tooltip from './Tooltip';
// import ReactTooltip from 'react-tooltip';
import { Typography } from '../Typography';
import { Button } from '../Button';
export default {
    title: 'Components/Tooltip',
    component: Tooltip,
};
export const Base = args => {
    const { text, place, delayShow, delayHide, primary, clickable, customTextColor, customBackColor, customBorderColor, customShadowColor, } = args;
    return (_jsxs(_Fragment, { children: [_jsx(Typography, Object.assign({ colorPreset: "primary", preset: null, variant: "p" }, { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste illo doloribus explicabo fuga voluptatum aspernatur deleniti doloremque ..." })), _jsx(Tooltip, Object.assign({ id: "iconTip", text: text, place: place, delayShow: delayShow, delayHide: delayHide, primary: primary, clickable: clickable, customTextColor: customTextColor, customBackColor: customBackColor, customBorderColor: customBorderColor, customShadowColor: customShadowColor }, { children: _jsx(Button, { presetSize: "large", primary: true, rounded: true, text: "Button", "data-for": "iconTip", "data-tip": true }) }))] }));
};
Base.args = {
    text: 'Testing tooltip',
    place: 'top',
    primary: true,
    clickable: false,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2456%3A5327&t=FUkgv4PJEdZo1qCA-4',
    },
};
const ClickEvent = () => (_jsxs(_Fragment, { children: [_jsx(Typography, Object.assign({ colorPreset: "primary", preset: null, variant: "p" }, { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste illo doloribus explicabo fuga voluptatum aspernatur deleniti doloremque ..." })), _jsx(Tooltip, Object.assign({ id: "clickTip", text: "Button Clicked", delayShow: 0, delayHide: 0, clickable: true, place: "right" }, { children: _jsx(Button, { presetSize: "large", rounded: true, text: "Click me", "data-for": "clickTip", "data-tip": true, "data-event": "click" }) }))] }));
export { ClickEvent };
//# sourceMappingURL=Tooltip.stories.js.map