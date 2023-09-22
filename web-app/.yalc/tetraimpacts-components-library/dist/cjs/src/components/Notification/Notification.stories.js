"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("../Button");
const Notification_1 = __importDefault(require("./Notification"));
const NotificationEmitter_1 = require("./NotificationEmitter");
exports.default = {
    title: 'Components/Notification',
    component: Notification_1.default,
};
const Base = args => {
    const { message, description, type: storyType, noCloseButton, noIcon, noAction, timeout, isSnackbar, position, } = args;
    const handleToast = (specifiedType) => {
        (0, NotificationEmitter_1.toast)({
            message: message || `Toast ${storyType || specifiedType || 'default'}`,
            description: description || 'Toast description',
            actionLabel: 'ACTION',
            noCloseButton,
            noIcon,
            noAction,
            type: storyType || specifiedType || 'default',
            timeout,
            isSnackbar,
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start',
                } }, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { text: "ERROR", onClick: () => handleToast('error') }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: "WARNING", onClick: () => handleToast('warning') }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: "SUCCESS", onClick: () => handleToast('success') }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: "INFO", onClick: () => handleToast('info') }), (0, jsx_runtime_1.jsx)(Button_1.Button, { text: "DEFAULT", onClick: () => handleToast() })] })), (0, jsx_runtime_1.jsx)(Notification_1.default, { position: position })] }));
};
exports.Base = Base;
exports.Base.args = {
    message: undefined,
    description: undefined,
    type: undefined,
    timeout: undefined,
    isSnackbar: false,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2213%3A4513&t=880UaVFHZPhNQzvv-4',
    },
};
//# sourceMappingURL=Notification.stories.js.map