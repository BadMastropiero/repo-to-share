import { jsx as _jsx } from "react/jsx-runtime";
import Typography from './Typography';
export default {
    title: 'Atoms/Typography',
    component: Typography,
};
export const Base = args => {
    const { text } = args;
    return _jsx(Typography, Object.assign({}, args, { children: text }));
};
export const Content = () => (_jsx(Typography, Object.assign({ preset: "content", variant: "p" }, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." })));
Base.args = {
    text: 'Test',
    variant: 'h1',
    preset: 'subtitle',
    colorPreset: 'primary',
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=6%3A2761',
    },
};
Content.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=6%3A2791',
    },
};
//# sourceMappingURL=Typography.stories.js.map