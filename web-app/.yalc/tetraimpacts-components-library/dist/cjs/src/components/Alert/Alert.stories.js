"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = require("../Button");
const Alert_1 = __importDefault(require("./Alert"));
const Typography_1 = require("../Typography");
exports.default = {
    title: 'Components/Alert',
    component: Alert_1.default,
};
const Base = args => {
    const { isOpen: visible, acceptText, rejectText, backdropBgColor, title, description, noCloseButton, primary, } = args;
    const [isVisible, setIsVisible] = (0, react_1.useState)(visible);
    const [label, setLabel] = (0, react_1.useState)('Interact with the Alert to see it results');
    (0, react_1.useEffect)(() => {
        setIsVisible(visible);
    }, [visible]);
    const launchAlert = () => {
        setIsVisible(true);
    };
    const handleAccept = () => {
        setIsVisible(false); // this must be done by the component
        setLabel('Alert accepted');
    };
    const handleReject = () => {
        setIsVisible(false);
        setLabel('Alert rejected');
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: launchAlert, presetSize: "small", text: "Launch Alert", primary: true, rounded: true }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ padding: "10px" }, { children: label })), (0, jsx_runtime_1.jsx)(Alert_1.default, { title: title, description: description, acceptText: acceptText, rejectText: rejectText, onAccept: handleAccept, onReject: handleReject, isOpen: isVisible, setIsOpen: setIsVisible, backdropBgColor: backdropBgColor, noCloseButton: noCloseButton, primary: primary })] }));
};
exports.Base = Base;
exports.Base.args = {
    title: 'Alert Title',
    description: 'Alert description: Lorem ipsum',
    isOpen: false,
    backdropBgColor: undefined,
    acceptText: undefined,
    rejectText: undefined,
    primary: undefined,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2211%3A4381&t=ZEYHAGM50sAejo8B-4',
    },
};
//# sourceMappingURL=Alert.stories.js.map