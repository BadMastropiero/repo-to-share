import { jsx as _jsx } from "react/jsx-runtime";
import Graph from './Graph';
export default {
    title: 'Icons/Graph',
    component: Graph,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(Graph, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
};
Base.args = {
    primary: true,
    disabled: false,
    height: '24px',
    width: '20px',
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/', // TODO: Get the icon's url
    },
};
//# sourceMappingURL=Graph.stories.js.map