


class SNode<T> {
    value: T
    next: SNode<T> | null

    constructor(val: T) {
        this.value = val
    }
}

export default class Stack<T> {
    private _head: SNode<T> | null = null;
    private _length: number = 0

    get empty(): boolean {
        return this._length == 0
    }

    push(val: T) {
        const node = new SNode<T>(val)
        if (!this._head) {
            this._head = node
        } else {
            node.next = this._head
            this._head = node
        }
        this._length++
    }

    pop(): T | null {
        if (!this._head) return null;
        const val = this._head.value;
        this._head = this._head.next;
        this._length--
        return val
    }


    peek(): T | null {
        return this._head ? this._head.value : null;
    }
}
