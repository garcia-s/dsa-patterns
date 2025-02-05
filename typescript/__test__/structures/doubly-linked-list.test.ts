import { DoublyLinkedList } from "../../src/structures/doubly-linked-list";

describe('DoublyLinkedList tests', () => {
    let list: DoublyLinkedList<number>;

    beforeEach(() => {
        list = new DoublyLinkedList<number>();
    });


    test('DoublyLinkedList.append() should add elements to the end of the list', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.toArray()).toEqual([1, 2, 3]);
        expect(list.length).toBe(3);
    });

    test('DoublyLinkedList.prepend() should add elements to the start of the  list', () => {
        list.prepend(1);
        list.prepend(2);
        list.prepend(3);
        expect(list.toArray()).toEqual([3, 2, 1]);
        expect(list.length).toBe(3);
    });

    test('DoublyLinkedList.poll() should empty if a single item exists', () => {
        list.append(1);
        list.poll();

        expect(list.toArray()).toEqual([]);
        expect(list.length).toBe(0);
    });


    test('DoublyLinkedList.poll() should remove elements from the list', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.poll();

        expect(list.toArray()).toEqual([1, 2]);
        expect(list.length).toBe(2);
    });


    test('DoublyLinkedList.pollFirst() should empty if a single item exists', () => {
        list.append(1);
        list.pollFirst();

        expect(list.toArray()).toEqual([]);
        expect(list.length).toBe(0);
    });

    test('DoublyLinkedList.pollFirst() should remove elements from the list', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.pollFirst();

        expect(list.toArray()).toEqual([2, 3]);
        expect(list.length).toBe(2);
    });


    test('DoublyLinkedList.find() should find an element in the list', () => {
        list.append(1);
        list.append(2);
        list.append(3);

        const val = list.find((val) => val === 2);
        expect(val).toBe(2);
    });

    test('DoublyLinkedList.find() should return null if the element is not found', () => {
        list.append(1);
        list.append(2);
        list.append(3);

        const node = list.find((v) => v === 4);
        expect(node).toBeNull();
    })

    test('should handle appending and prepending together', () => {
        list.append(1);
        list.prepend(0);
        list.append(2);
        expect(list.toArray()).toEqual([0, 1, 2]);
    });
});
