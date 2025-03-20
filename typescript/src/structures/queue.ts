
export class ReadOnEmptyQueueException extends Error { }


export default class Queue<T> {
    private _head: QNode<T> | null = null
    private _tail: QNode<T> | null = null
    private _len: number = 0

    get isEmpty(): boolean {
        return this._len === 0
    }

    get length(): number {
        return this._len
    }

    enqueue(value: T) {
        const node = new QNode<T>(value)

        if (this._len === 0) {
            this._head = this._tail = node
            this._len++
            return
        }

        this._tail!.next = node
        this._tail = node;
        this._len++
    }


    poll(): T {

        if (this._len === 0)
            throw new ReadOnEmptyQueueException();

        const node = this._head

        if (this._len === 1) {
            this._head = this._tail = null
            this._len--
            return node!.value
        }

        this._head = node!.next
        this._len--
        return node!.value
    }

    peek(): T {
        if (this._len == 0)
            throw new ReadOnEmptyQueueException();
        return this._head!.value
    }
}


class QNode<T> {
    next: QNode<T> | null = null
    value: T

    constructor(value: T) {
        this.value = value;
    }
}
