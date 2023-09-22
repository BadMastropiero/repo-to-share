import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Option from './Option';
export default {
    title: 'Components/Option',
    component: Option,
};
export const Base = args => {
    const { primary, disabled, text, noCheckbox } = args;
    const [selected, setSelected] = useState(false);
    return (_jsx(Option, { primary: primary, disabled: disabled, selected: selected, onClick: () => {
            setSelected(!selected);
        }, text: text, noCheckbox: noCheckbox }));
};
Base.args = {
    primary: true,
    disabled: false,
    text: 'Option1',
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1511',
    },
};
export const NoCheckbox = args => {
    const { primary } = args;
    const [selected, setSelected] = useState(false);
    return (_jsx(Option, { primary: primary, selected: selected, onClick: () => {
            setSelected(!selected);
        }, text: "No checkbox in here", noCheckbox: true }));
};
NoCheckbox.args = {
    primary: true,
    disabled: false,
};
NoCheckbox.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1511',
    },
};
//# sourceMappingURL=Option.stories.js.map