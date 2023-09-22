import { jsx as _jsx } from "react/jsx-runtime";
import ArrowDown from './ArrowDown';
export default {
    title: 'Icons/ArrowDown',
    component: ArrowDown,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(ArrowDown, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
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
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1370',
    },
};
//# sourceMappingURL=ArrowDown.stories.js.map