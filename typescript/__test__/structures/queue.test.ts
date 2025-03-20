import Queue from "../../src/structures/queue";

describe("Queue Implementation", () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test("Should start as an empty queue", () => {
        expect(queue.isEmpty).toBe(true);
        expect(queue.length).toBe(0);
    });

    test("Should enqueue elements correctly", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.isEmpty).toBe(false);
        expect(queue.length).toBe(3);
        expect(queue.peek()).toBe(1);
    });


    test("Should poll elements in FIFO order", () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        expect(queue.poll()).toBe(10);
        expect(queue.length).toBe(2);

        expect(queue.poll()).toBe(20);
        expect(queue.length).toBe(1);

        expect(queue.poll()).toBe(30);
        expect(queue.length).toBe(0);

        expect(queue.isEmpty).toBe(true);
    });

    test("Should throw while polling on an empty queue", () => {
        expect(queue.poll).toThrow();
    });

    test("Should peek at the front element without removing it", () => {
        queue.enqueue(5);
        queue.enqueue(15);

        expect(queue.peek()).toBe(5);
        expect(queue.length).toBe(2);
    });

    test("Should throw when peeking an empty queue", () => {
        expect(queue.peek).toThrow();
    });

});
