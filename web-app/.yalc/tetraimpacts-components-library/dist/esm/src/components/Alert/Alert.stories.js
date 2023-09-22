import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import Alert from './Alert';
import { Typography } from '../Typography';
export default {
    title: 'Components/Alert',
    component: Alert,
};
export const Base = args => {
    const { isOpen: visible, acceptText, rejectText, backdropBgColor, title, description, noCloseButton, primary, } = args;
    const [isVisible, setIsVisible] = useState(visible);
    const [label, setLabel] = useState('Interact with the Alert to see it results');
    useEffect(() => {
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
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: launchAlert, presetSize: "small", text: "Launch Alert", primary: true, rounded: true }), _jsx(Typography, Object.assign({ padding: "10px" }, { children: label })), _jsx(Alert, { title: title, description: description, acceptText: acceptText, rejectText: rejectText, onAccept: handleAccept, onReject: handleReject, isOpen: isVisible, setIsOpen: setIsVisible, backdropBgColor: backdropBgColor, noCloseButton: noCloseButton, primary: primary })] }));
};
Base.args = {
    title: 'Alert Title',
    description: 'Alert description: Lorem ipsum',
    isOpen: false,
    backdropBgColor: undefined,
    acceptText: undefined,
    rejectText: undefined,
    primary: undefined,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2211%3A4381&t=ZEYHAGM50sAejo8B-4',
    },
};
//# sourceMappingURL=Alert.stories.js.map