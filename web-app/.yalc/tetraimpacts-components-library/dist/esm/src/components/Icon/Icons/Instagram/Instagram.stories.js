import { jsx as _jsx } from "react/jsx-runtime";
import Instagram from './Instagram';
export default {
    title: 'Icons/Instagram',
    component: Instagram,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(Instagram, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
};
Base.args = {
    primary: true,
    disabled: false,
    height: '24px',
    width: '24px',
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7696&t=BIshAsTq0IpyTmy6-4',
    },
};
//# sourceMappingURL=Instagram.stories.js.map