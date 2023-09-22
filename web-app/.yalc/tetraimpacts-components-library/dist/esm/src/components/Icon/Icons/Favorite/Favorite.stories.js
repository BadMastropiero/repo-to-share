import { jsx as _jsx } from "react/jsx-runtime";
import Favorite from './Favorite';
export default {
    title: 'Icons/Favorite',
    component: Favorite,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(Favorite, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
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
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A16424&t=KrcOfRZv8sH0ktxH-4',
    },
};
//# sourceMappingURL=Favorite.stories.js.map