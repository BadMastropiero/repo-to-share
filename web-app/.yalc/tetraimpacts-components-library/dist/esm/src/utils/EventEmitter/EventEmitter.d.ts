export default class EventEmitter<E extends string, D> {
    events: Record<string, ((data: D) => void)[]>;
    constructor();
    listen(event: E, listener: (data: D) => void): void;
    emit(event: E, payload: D): void;
}
