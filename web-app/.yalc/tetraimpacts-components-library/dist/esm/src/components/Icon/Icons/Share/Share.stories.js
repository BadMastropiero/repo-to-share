import { jsx as _jsx } from "react/jsx-runtime";
import Share from './Share';
export default {
    title: 'Icons/Share',
    component: Share,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(Share, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
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
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1382',
    },
};
//# sourceMappingURL=Share.stories.js.map