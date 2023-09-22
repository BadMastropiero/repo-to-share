import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import Modal from './Modal';
import CarWrapped, { CardContent, CardControls, CardHeader } from '../Card';
import { Icon, Share } from '../Icon';
export default {
    title: 'Components/Modal',
    component: Modal,
};
export const Base = args => {
    const { isOpen, closeOnBackdropClick, style, backdropBgColor, noDismissOnEsc } = args;
    const [isVisible, setIsVisible] = useState(isOpen);
    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);
    const handleOpen = () => {
        setIsVisible(true);
    };
    const handleClose = () => {
        setIsVisible(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: handleOpen, presetSize: "small", text: "Open Modal", primary: true, rounded: true }), _jsx(Modal, Object.assign({ id: "modal-with-card", isOpen: isVisible, setIsOpen: setIsVisible, closeOnBackdropClick: closeOnBackdropClick, style: style, backdropBgColor: backdropBgColor, noDismissOnEsc: noDismissOnEsc }, { children: _jsxs(CarWrapped, Object.assign({ width: "420px", variant: "service" }, { children: [_jsx(CardHeader, { children: _jsx(Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", gradient: "linear-gradient(45deg, #00EB87, #0066A6)", fontFamily: "Roboto Flex" }, { children: "Card inside a modal" })) }), _jsx(CardContent, { children: _jsx(Typography, Object.assign({ colorPreset: "primary", preset: "content" }, { children: _jsxs("ul", { children: [_jsx("li", { children: "Modals can accept all kind of children components." }), _jsx("li", { children: "You can dismiss this modal by pressing ESC." }), _jsx("li", { children: "For styling the modal (and backdrop), modify its style prop." })] }) })) }), _jsxs(CardControls, { children: [_jsxs("div", Object.assign({ style: { display: 'flex', width: '100%', alignItems: 'center', gap: '5px' } }, { children: [_jsx(Icon, { icon: Share, primary: true, disabled: true, height: "16px", width: "16px" }), _jsx(Typography, Object.assign({ colorPreset: "disable", fontSize: "12px", lineHeight: "24px", preset: "content", "aria-label": "likes" }, { children: "9999,9999" }))] })), _jsx("div", Object.assign({ style: { display: 'flex', flexDirection: 'row', justifyContent: 'end' } }, { children: _jsx(Button, { onClick: handleClose, presetSize: "small", rounded: true, text: "Close" }) }))] })] })) }))] }));
};
Base.args = {
    isOpen: false,
    closeOnBackdropClick: false,
    style: undefined,
    backdropBgColor: undefined,
    noDismissOnEsc: false,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: '',
    },
};
//# sourceMappingURL=Modal.stories.js.map