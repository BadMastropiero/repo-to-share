import EventEmitter from '../../utils/EventEmitter/EventEmitter';
export var NotificationEvents;
(function (NotificationEvents) {
    NotificationEvents["ADD_TOAST"] = "addToast";
})(NotificationEvents || (NotificationEvents = {}));
export const tiEmitter = new EventEmitter();
export const toast = (data) => {
    // TODO Improve ID generation
    const id = new Date().getTime();
    tiEmitter.emit(NotificationEvents.ADD_TOAST, Object.assign(Object.assign({}, data), { id }));
};
//# sourceMappingURL=NotificationEmitter.js.map