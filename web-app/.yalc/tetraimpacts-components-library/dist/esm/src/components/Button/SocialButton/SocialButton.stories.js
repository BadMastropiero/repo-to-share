import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SocialButton from './SocialButton';
import { Facebook, Instagram, Linkedin, Twitter } from '../../Icon';
export default {
    title: 'Components/SocialButton',
    component: SocialButton,
};
export const Base = args => {
    const { primary, disabled, presetSize, onClick, rounded } = args;
    return (_jsx(SocialButton, { primary: primary, disabled: disabled, onClick: onClick, presetSize: presetSize, rounded: rounded, icon: Instagram }));
};
export const Link = args => {
    const { primary, disabled, presetSize, onClick, rounded } = args;
    return (_jsx(SocialButton, { href: "https://example.com", primary: primary, disabled: disabled, onClick: onClick, presetSize: presetSize, rounded: rounded, icon: Instagram }));
};
export const All = args => {
    const { primary, disabled, onClick, rounded } = args;
    return (_jsxs("div", Object.assign({ style: { display: 'flex', gap: '10px', alignItems: 'center' } }, { children: [_jsx(SocialButton, { primary: primary, disabled: disabled, onClick: onClick, rounded: rounded, icon: Linkedin }), _jsx(SocialButton, { primary: primary, disabled: disabled, onClick: onClick, rounded: rounded, icon: Instagram }), _jsx(SocialButton, { primary: primary, disabled: disabled, onClick: onClick, rounded: rounded, icon: Facebook }), _jsx(SocialButton, { primary: primary, disabled: disabled, onClick: onClick, rounded: rounded, icon: Twitter })] })));
};
Base.args = {
    primary: true,
    disabled: false,
    presetSize: 'large',
    onClick: () => { },
    rounded: true,
};
Link.args = {
    primary: true,
    disabled: false,
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
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2578%3A19454&t=0QjFHdLrz9OxRMPk-4',
    },
};
All.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2578%3A19454&t=0QjFHdLrz9OxRMPk-4',
    },
};
//# sourceMappingURL=SocialButton.stories.js.map