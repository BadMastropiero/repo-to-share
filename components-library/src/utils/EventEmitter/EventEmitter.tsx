export default class EventEmitter<E extends string, D> {
  events: Record<string, ((data: D) => void)[]>;

  constructor() {
    this.events = {};
  }

  listen(event: E, listener: (data: D) => void) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  emit(event: E, payload: D) {
    if (this.events[event]) {
      this.events[event].forEach(listener => {
        listener(payload);
      });
    }
  }
}
