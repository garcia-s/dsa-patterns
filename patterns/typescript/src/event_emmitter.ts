
type ListenerCallback<T = any> = (payload: T) => void;

export class EventEmitter<Events extends Record<string, any>> {
    private _listeners: Map<keyof Events, ListenerCallback[]>;

    constructor() {
        this._listeners = new Map();
    }

    on<K extends keyof Events>(event: K, callback: ListenerCallback<Events[K]>): void {
        if (!this._listeners.has(event)) {
            this._listeners.set(event, []);
        }
        this._listeners.get(event)!.push(callback);
    }

    once<K extends keyof Events>(event: K, callback: ListenerCallback<Events[K]>): void {
        const onceWrapper: ListenerCallback<Events[K]> = (payload) => {
            callback(payload);
            this.off(event, onceWrapper);
        };
        this.on(event, onceWrapper);
    }

    off<K extends keyof Events>(event: K, callback: ListenerCallback<Events[K]>): void {
        if (!this._listeners.has(event)) return;

        const callbacks = this._listeners.get(event)!;
        const filteredCallbacks = callbacks.filter((cb) => cb !== callback);
        this._listeners.set(event, filteredCallbacks);
    }

    emit<K extends keyof Events>(event: K, payload: Events[K]): void {
        if (!this._listeners.has(event)) return;

        const callbacks = this._listeners.get(event)!;
        callbacks.forEach((callback) => callback(payload));
    }

    clearAll(): void {
        this._listeners = new Map();
    }
}
