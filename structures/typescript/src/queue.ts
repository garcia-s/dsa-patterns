


class QNode<T> {
    value: T
    next: QNode<T> | null
    constructor(val) {
        this.value = val
    }
}
export default class Queue<T> {
    private _head: QNode<T> | null = null;
    private _tail: QNode<T> | null = null;
    private _length: number = 0;


    enqueue() {

    }

    dequeue() {}

    peek() {


    }
}
