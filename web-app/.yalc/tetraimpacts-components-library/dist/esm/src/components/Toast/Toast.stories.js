import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import Toast from './Toast';
import { Typography } from '../Typography';
export default {
    title: 'Components/Toast',
    component: Toast,
};
export const Base = args => {
    const { isOpen: visible = false, actionLabel, background, highlightColor, message: title, description: message, noCloseButton, noAction, noIcon, type, timeout, isSnackbar, } = args;
    const [isVisible, setIsVisible] = useState(visible);
    const [handledText, setHandledText] = useState('Interact with the toast to see it results');
    useEffect(() => {
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
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: launchToast, presetSize: "small", text: "Launch Toast", primary: true, rounded: true }), _jsx(Typography, Object.assign({ padding: "10px" }, { children: handledText })), _jsx(Toast, { message: title, description: message, actionLabel: actionLabel, onActionClicked: handleAction, onDismissed: handleDismiss, isOpen: isVisible, setIsOpen: setIsVisible, background: background, highlightColor: highlightColor, noCloseButton: noCloseButton, noIcon: noIcon, noAction: noAction, type: type, timeout: timeout, isSnackbar: isSnackbar })] }));
};
Base.args = {
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
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2213%3A4529&t=zcHB2Up79k7uM2aA-4',
    },
};
//# sourceMappingURL=Toast.stories.js.map