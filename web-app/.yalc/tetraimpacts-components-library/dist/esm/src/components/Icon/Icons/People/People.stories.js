import { jsx as _jsx } from "react/jsx-runtime";
import People from './People';
export default {
    title: 'Icons/People',
    component: People,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(People, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
};
Base.args = {
    primary: true,
    disabled: false,
    height: '24px',
    width: '31px',
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/', // TODO: Get the icon's url
    },
};
//# sourceMappingURL=People.stories.js.map