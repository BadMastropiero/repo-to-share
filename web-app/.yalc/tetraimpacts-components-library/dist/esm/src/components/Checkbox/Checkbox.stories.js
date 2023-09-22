import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Checkbox from './Checkbox';
export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
};
export const Base = args => {
    const [checked, setChecked] = useState(false);
    const { primary, width, height, disabled } = args;
    return (_jsx(Checkbox, { height: height, width: width, disabled: disabled, primary: primary, checked: checked, onChange: () => {
            setChecked(!checked);
        } }));
};
Base.args = {
    primary: true,
    disabled: false,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1350',
    },
};
//# sourceMappingURL=Checkbox.stories.js.map