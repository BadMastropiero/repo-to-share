import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { NotificationEvents, tiEmitter } from './NotificationEmitter';
import { Toast } from '../Toast';
import StyledNotificationWrapper from './Notification.styles';
const Notification = ({ position }) => {
    const [notificationList, setNotificationList] = useState([]);
    const pushNewToast = (payload) => {
        setNotificationList(oldState => {
            const newState = [...oldState];
            newState.push(payload);
            return newState;
        });
    };
    const handleClose = (id) => {
        setNotificationList(oldState => {
            const newState = [...oldState];
            const index = newState.findIndex(item => item.id === id);
            newState.splice(index, 1);
            return newState;
        });
    };
    useEffect(() => {
        tiEmitter.listen(NotificationEvents.ADD_TOAST, data => pushNewToast(data));
        // TODO Add an noListen event
    }, []);
    return (_jsx(StyledNotificationWrapper, Object.assign({ className: `notification-wrapper ${position}` }, { children: notificationList.map(item => (_jsx(Toast, { style: { pointerEvents: 'all' }, setIsOpen: () => handleClose(item.id), isOpen: true, actionLabel: item.actionLabel, description: item.description, message: item.message, type: item.type, noIcon: item.noIcon, noAction: item.noAction, isSnackbar: item.isSnackbar, timeout: item.timeout }, item.id))) })));
};
export default Notification;
//# sourceMappingURL=Notification.js.map