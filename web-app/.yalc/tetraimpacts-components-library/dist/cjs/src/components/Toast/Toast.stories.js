"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = require("../Button");
const Toast_1 = __importDefault(require("./Toast"));
const Typography_1 = require("../Typography");
exports.default = {
    title: 'Components/Toast',
    component: Toast_1.default,
};
const Base = args => {
    const { isOpen: visible = false, actionLabel, background, highlightColor, message: title, description: message, noCloseButton, noAction, noIcon, type, timeout, isSnackbar, } = args;
    const [isVisible, setIsVisible] = (0, react_1.useState)(visible);
    const [handledText, setHandledText] = (0, react_1.useState)('Interact with the toast to see it results');
    (0, react_1.useEffect)(() => {
        setIsVisible(visible);
    }, [visible]);
    const launchToast = () => {
        setIsVisible(true);
    };
    const handleAction = () => {
        setHandledText("You've triggered the action");
    };
    const handleDismiss = () => {
        setHandledText("You've dismissed");
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: launchToast, presetSize: "small", text: "Launch Toast", primary: true, rounded: true }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ padding: "10px" }, { children: handledText })), (0, jsx_runtime_1.jsx)(Toast_1.default, { message: title, description: message, actionLabel: actionLabel, onActionClicked: handleAction, onDismissed: handleDismiss, isOpen: isVisible, setIsOpen: setIsVisible, background: background, highlightColor: highlightColor, noCloseButton: noCloseButton, noIcon: noIcon, noAction: noAction, type: type, timeout: timeout, isSnackbar: isSnackbar })] }));
};
exports.Base = Base;
exports.Base.args = {
    message: 'Toast Title',
    description: 'Toast message: Lorem ipsum',
    isOpen: false,
    background: undefined,
    highlightColor: undefined,
    actionLabel: undefined,
    noIcon: false,
    noAction: false,
    noCloseButton: false,
    type: undefined,
    timeout: undefined,
    isSnackbar: undefined,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2213%3A4529&t=zcHB2Up79k7uM2aA-4',
    },
};
//# sourceMappingURL=Toast.stories.js.map