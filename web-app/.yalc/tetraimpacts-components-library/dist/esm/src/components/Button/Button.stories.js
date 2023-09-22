import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from './Button';
import { ArrowLeft, ArrowRight } from '../Icon';
export default {
    title: 'Components/Button',
    component: Button,
};
export const Base = args => {
    const { primary, text, showAfter, showPrev, disabled, presetSize, onClick, rounded, presetType } = args;
    return (_jsx(Button, { primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: showAfter ? ArrowRight : undefined, beforeIcon: showPrev ? ArrowLeft : undefined, presetSize: presetSize, rounded: rounded, presetType: presetType }));
};
export const Link = args => {
    const { primary, text, showAfter, showPrev, disabled, presetSize, onClick, rounded, presetType } = args;
    return (_jsx(Button, { href: "http://example.com", primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: showAfter ? ArrowRight : undefined, beforeIcon: showPrev ? ArrowLeft : undefined, presetSize: presetSize, rounded: rounded, presetType: presetType }));
};
export const All = args => {
    const { primary, text, disabled, onClick, rounded } = args;
    return (_jsxs("div", Object.assign({ style: { display: 'flex', gap: '10px', alignItems: 'center' } }, { children: [_jsx(Button, { primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: ArrowRight, presetSize: "large", rounded: rounded }), _jsx(Button, { primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: ArrowRight, presetSize: "normal", rounded: rounded }), _jsx(Button, { primary: primary, disabled: disabled, onClick: onClick, text: text, afterIcon: ArrowRight, presetSize: "small", rounded: rounded })] })));
};
Base.args = {
    primary: true,
    disabled: false,
    text: 'Button',
    showAfter: true,
    showPrev: false,
    presetSize: 'large',
    onClick: () => { },
    rounded: true,
};
Link.args = {
    primary: true,
    disabled: false,
    text: 'Button',
    showAfter: true,
    showPrev: false,
    presetSize: 'large',
    onClick: () => { },
    rounded: true,
};
All.args = {
    primary: true,
    disabled: false,
    text: 'Button',
    onClick: () => { },
    rounded: true,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1157',
    },
};
All.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1157',
    },
};
//# sourceMappingURL=Button.stories.js.map