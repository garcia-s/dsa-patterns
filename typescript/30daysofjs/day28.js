class EventEmitter {
    constructor() {
        this.listeners = {}
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        this.listeners[eventName] ? this.listeners[eventName].push(callback) :
            this.listeners[eventName] = [callback]

        return {
            unsubscribe: () => {
                for (let i = 0; i < this.listeners[eventName].length; i++) {
                    if (this.listeners[eventName][i] == callback) {
                        this.listeners[eventName].splice(i, 1);
                        return
                    }
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.listeners[eventName]) {
            return []
        }
        let res = [];
        for (let i = 0; i < this.listeners[eventName].length; i++) {
            res.push(this.listeners[eventName][i](...args))
        }
        return res
    }
}
