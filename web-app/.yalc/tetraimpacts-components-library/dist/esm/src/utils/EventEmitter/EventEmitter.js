export default class EventEmitter {
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
//# sourceMappingURL=EventEmitter.js.map