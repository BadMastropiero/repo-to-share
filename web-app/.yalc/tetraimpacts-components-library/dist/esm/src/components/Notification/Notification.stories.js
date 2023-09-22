import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '../Button';
import Notification from './Notification';
import { toast } from './NotificationEmitter';
export default {
    title: 'Components/Notification',
    component: Notification,
};
export const Base = args => {
    const { message, description, type: storyType, noCloseButton, noIcon, noAction, timeout, isSnackbar, position, } = args;
    const handleToast = (specifiedType) => {
        toast({
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
    return (_jsxs(_Fragment, { children: [_jsxs("div", Object.assign({ style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start',
                } }, { children: [_jsx(Button, { text: "ERROR", onClick: () => handleToast('error') }), _jsx(Button, { text: "WARNING", onClick: () => handleToast('warning') }), _jsx(Button, { text: "SUCCESS", onClick: () => handleToast('success') }), _jsx(Button, { text: "INFO", onClick: () => handleToast('info') }), _jsx(Button, { text: "DEFAULT", onClick: () => handleToast() })] })), _jsx(Notification, { position: position })] }));
};
Base.args = {
    message: undefined,
    description: undefined,
    type: undefined,
    timeout: undefined,
    isSnackbar: false,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2213%3A4513&t=880UaVFHZPhNQzvv-4',
    },
};
//# sourceMappingURL=Notification.stories.js.map