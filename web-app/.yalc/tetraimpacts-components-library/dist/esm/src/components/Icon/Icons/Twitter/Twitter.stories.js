import { jsx as _jsx } from "react/jsx-runtime";
import Twitter from './Twitter';
export default {
    title: 'Icons/Twitter',
    component: Twitter,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(Twitter, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
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
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7694&t=BIshAsTq0IpyTmy6-4',
    },
};
//# sourceMappingURL=Twitter.stories.js.map