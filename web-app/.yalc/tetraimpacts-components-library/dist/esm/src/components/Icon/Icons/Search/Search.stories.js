import { jsx as _jsx } from "react/jsx-runtime";
import Search from './Search';
export default {
    title: 'Icons/Search',
    component: Search,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(Search, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
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
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7703&t=MhRBytiTYPFgGoGn-4',
    },
};
//# sourceMappingURL=Search.stories.js.map