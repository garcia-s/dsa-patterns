class Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null

    constructor(val: T) {
        this.value = val;
    }
}

export class DoublyLinkedList<T> {
    private _head: Node<T> | null
    private _tail: Node<T> | null
    private _length: number



    //New empty LinkedList
    constructor() {
        this._length = 0
    }

    public get length(): number {
        return this._length
    }

    toArray(): T[] {
        const list: T[] = [];
        let current = this._head;
        while (current) {
            list.push(current.value);
            current = current.next;
        }
        return list;
    }

    append(value: T): void {
        const node = new Node<T>(value)
        //Empty like your heart, so no prev or next things
        if (!this._head) {
            this._head = node
            this._tail = node
            this._length++
            return
        }

        node.prev = this._tail;
        this._tail!.next = node
        this._tail = node
        this._length++
    }
    //
    //
    prepend(value: T): void {

        const node = new Node<T>(value)
        if (!this._head) {
            this._head = node
            this._tail = node
            this._length++
            return
        }

        node.next = this._head
        this._head!.prev = node
        this._head = node
        this._length++
    }

    poll(): T | undefined {
        if (this._length === 0) return
        const val = this._tail!.value


        if (this._length > 1) {
            this._tail = this._tail!.prev;
            this._tail!.next = null
        } else {
            this._tail = null
            this._head = null
        }

        this._length--;
        return val;
    }

    pollFirst(): T | undefined {

        if (this._length === 0) return
        const val = this._head!.value

        if (this._length > 1) {
            this._head = this._head!.next;
            this._head!.prev = null
        } else {
            this._tail = null
            this._head = null
        }

        this._length--;
        return val;
    }
    //
    peek(): T | null {
        if (!this._tail) return null
        return this._tail.value;
    }
    //
    //
    peekFirst(): T | null {
        if (!this._head) return null
        return this._head.value;
    }

    find(cb: (val: T) => boolean): T | null {
        let current = this._head
        while (current) {
            if (cb(current.value)) return current.value
            current = current.next
        }
        return null;
    }

}
