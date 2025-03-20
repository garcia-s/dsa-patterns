


class SNode<T> {
    value: T
    next: SNode<T> | null

    constructor(val: T) {
        this.value = val
    }
}

export class ReadingEmptyStackException extends Error { }

export default class Stack<T> {
    private _head: SNode<T> | null = null;
    private _len: number = 0

    get isEmpty(): boolean {
        return this._len == 0
    }

    get length() {
        return this._len
    }

    push(val: T) {
        const node = new SNode<T>(val)
        if (!this._head) {
            this._head = node
        } else {
            node.next = this._head
            this._head = node
        }
        this._len++
    }

    pop(): T {
        if (this._len === 0)
            throw new ReadingEmptyStackException();
        const val = this._head!.value;
        this._head = this._head!.next;
        this._len--
        return val
    }

    peek(): T {
        if (this._len === 0)
            throw new ReadingEmptyStackException();
        return this._head!.value;
    }
}
