"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const NotificationEmitter_1 = require("./NotificationEmitter");
const Toast_1 = require("../Toast");
const Notification_styles_1 = __importDefault(require("./Notification.styles"));
const Notification = ({ position }) => {
    const [notificationList, setNotificationList] = (0, react_1.useState)([]);
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
    (0, react_1.useEffect)(() => {
        NotificationEmitter_1.tiEmitter.listen(NotificationEmitter_1.NotificationEvents.ADD_TOAST, data => pushNewToast(data));
        // TODO Add an noListen event
    }, []);
    return ((0, jsx_runtime_1.jsx)(Notification_styles_1.default, Object.assign({ className: `notification-wrapper ${position}` }, { children: notificationList.map(item => ((0, jsx_runtime_1.jsx)(Toast_1.Toast, { style: { pointerEvents: 'all' }, setIsOpen: () => handleClose(item.id), isOpen: true, actionLabel: item.actionLabel, description: item.description, message: item.message, type: item.type, noIcon: item.noIcon, noAction: item.noAction, isSnackbar: item.isSnackbar, timeout: item.timeout }, item.id))) })));
};
exports.default = Notification;
//# sourceMappingURL=Notification.js.map