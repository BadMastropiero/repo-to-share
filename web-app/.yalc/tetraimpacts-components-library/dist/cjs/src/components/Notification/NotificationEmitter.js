"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toast = exports.tiEmitter = exports.NotificationEvents = void 0;
const EventEmitter_1 = __importDefault(require("../../utils/EventEmitter/EventEmitter"));
var NotificationEvents;
(function (NotificationEvents) {
    NotificationEvents["ADD_TOAST"] = "addToast";
})(NotificationEvents = exports.NotificationEvents || (exports.NotificationEvents = {}));
exports.tiEmitter = new EventEmitter_1.default();
const toast = (data) => {
    // TODO Improve ID generation
    const id = new Date().getTime();
    exports.tiEmitter.emit(NotificationEvents.ADD_TOAST, Object.assign(Object.assign({}, data), { id }));
};
exports.toast = toast;
//# sourceMappingURL=NotificationEmitter.js.map