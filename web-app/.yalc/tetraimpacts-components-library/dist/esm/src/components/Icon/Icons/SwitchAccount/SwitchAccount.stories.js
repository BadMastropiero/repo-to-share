import { jsx as _jsx } from "react/jsx-runtime";
import SwitchAccount from './SwitchAccount';
export default {
    title: 'Icons/SwitchAccount',
    component: SwitchAccount,
};
export const Base = args => {
    const { primary, customColor: color, disabled, height, width } = args;
    return (_jsx(SwitchAccount, { primary: primary, customColor: color, disabled: disabled, height: height, width: width }));
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
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7706&t=CfMJO1c37mL1yFKy-4',
    },
};
//# sourceMappingURL=SwitchAccount.stories.js.map