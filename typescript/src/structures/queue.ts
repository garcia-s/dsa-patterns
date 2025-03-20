


class QNode<T> {
    next: QNode<T> | null = null
    value: T

    constructor(value: T) {
        this.value = value;
    }
}

export class Queue<T> {
    private _head: QNode<T> | null = null
    private _tail: QNode<T> | null = null
    private _len: number = 0


    enqueue(value: T) {
        const node = new QNode<T>(value)

        if (this._len === 0) {
            this._head = this._tail = node
            this._len++
        }

        this._tail!.next == node
        this._tail = node;
    }


    poll(): T | null {
        if (this._len === 0) return null
        const node = this._head
        if (this._len === 1) {
            this._head = this._tail = null
            this._len--
            return node!.value
        }

        this._head = this._head!.next
        return node!.value
    }

    peek(): T | null {
        if (this._len == 0) return null;
        return this._head!.value
    }
}
