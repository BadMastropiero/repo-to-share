import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import NavButton from './NavButton';
import { Forum, Style, SwitchAccount, Tetraimpacts, ViewCarrousel } from '../../Icon';
export default {
    title: 'Components/NavButton',
    component: NavButton,
};
export const Base = args => {
    const { primary, disabled, onClick, highlight, isActive } = args;
    return (_jsx(NavButton, { primary: primary, disabled: disabled, highlight: highlight, isActive: isActive, onClick: onClick, text: "TetraImpacts" }));
};
export const All = args => {
    const { primary, disabled, onClick } = args;
    const { colors } = useContext(ThemeContext);
    return (_jsxs("div", Object.assign({ style: {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: `${primary ? colors.primaryBg : colors.primary}`,
            width: 'max-content',
        } }, { children: [_jsx(NavButton, { primary: primary, disabled: disabled, text: "Tetraimpacts", onClick: onClick, icon: Tetraimpacts }), _jsx(NavButton, { primary: primary, disabled: disabled, text: "Account", onClick: onClick, icon: SwitchAccount }), _jsx(NavButton, { primary: primary, disabled: disabled, text: "Blog", onClick: onClick, icon: Style }), _jsx(NavButton, { primary: primary, disabled: disabled, text: "Services", onClick: onClick, icon: ViewCarrousel, highlight: true }), _jsx(NavButton, { primary: primary, disabled: disabled, text: "Forum", onClick: onClick, icon: Forum })] })));
};
Base.args = {
    primary: true,
    disabled: false,
    onClick: () => { },
};
All.args = {
    primary: true,
    disabled: false,
    onClick: () => { },
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
//# sourceMappingURL=NavButton.stories.js.map