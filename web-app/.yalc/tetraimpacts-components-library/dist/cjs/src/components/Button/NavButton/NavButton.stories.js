"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const NavButton_1 = __importDefault(require("./NavButton"));
const Icon_1 = require("../../Icon");
exports.default = {
    title: 'Components/NavButton',
    component: NavButton_1.default,
};
const Base = args => {
    const { primary, disabled, onClick, highlight, isActive } = args;
    return ((0, jsx_runtime_1.jsx)(NavButton_1.default, { primary: primary, disabled: disabled, highlight: highlight, isActive: isActive, onClick: onClick, text: "TetraImpacts" }));
};
exports.Base = Base;
const All = args => {
    const { primary, disabled, onClick } = args;
    const { colors } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: `${primary ? colors.primaryBg : colors.primary}`,
            width: 'max-content',
        } }, { children: [(0, jsx_runtime_1.jsx)(NavButton_1.default, { primary: primary, disabled: disabled, text: "Tetraimpacts", onClick: onClick, icon: Icon_1.Tetraimpacts }), (0, jsx_runtime_1.jsx)(NavButton_1.default, { primary: primary, disabled: disabled, text: "Account", onClick: onClick, icon: Icon_1.SwitchAccount }), (0, jsx_runtime_1.jsx)(NavButton_1.default, { primary: primary, disabled: disabled, text: "Blog", onClick: onClick, icon: Icon_1.Style }), (0, jsx_runtime_1.jsx)(NavButton_1.default, { primary: primary, disabled: disabled, text: "Services", onClick: onClick, icon: Icon_1.ViewCarrousel, highlight: true }), (0, jsx_runtime_1.jsx)(NavButton_1.default, { primary: primary, disabled: disabled, text: "Forum", onClick: onClick, icon: Icon_1.Forum })] })));
};
exports.All = All;
exports.Base.args = {
    primary: true,
    disabled: false,
    onClick: () => { },
};
exports.All.args = {
    primary: true,
    disabled: false,
    onClick: () => { },
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2578%3A19454&t=0QjFHdLrz9OxRMPk-4',
    },
};
exports.All.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2578%3A19454&t=0QjFHdLrz9OxRMPk-4',
    },
};
//# sourceMappingURL=NavButton.stories.js.map