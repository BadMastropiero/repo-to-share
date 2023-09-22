import { jsx as _jsx } from "react/jsx-runtime";
import DynamicComponent from './DynamicComponent';
export default {
    title: 'Support/DynamicComponent',
    component: DynamicComponent,
};
export const Base = args => {
    const { tag } = args;
    return (_jsx(DynamicComponent, Object.assign({ tag: tag }, args, { children: "Test" })));
};
Base.args = {
    tag: 'h1',
};
//# sourceMappingURL=DynamicComponent.stories.js.map