"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toast = exports.Notification = void 0;
const Notification_1 = __importDefault(require("./Notification"));
exports.Notification = Notification_1.default;
const NotificationEmitter_1 = require("./NotificationEmitter");
Object.defineProperty(exports, "toast", { enumerable: true, get: function () { return NotificationEmitter_1.toast; } });
exports.default = Notification_1.default;
//# sourceMappingURL=index.js.map