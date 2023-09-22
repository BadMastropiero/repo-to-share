"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventEmitter {
    constructor() {
        this.events = {};
    }
    listen(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    emit(event, payload) {
        if (this.events[event]) {
            this.events[event].forEach(listener => {
                listener(payload);
            });
        }
    }
}
exports.default = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map