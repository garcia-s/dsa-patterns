import Stack from "../src/stack";

describe('Stack tests', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });


    test('Stack.push() should add a new element when the stack is empty', () => {
        stack.push(1);
        expect(stack.empty).toBeFalsy();
        expect(stack.pop()).toBe(1);
    });

    test('Stack.pop() should pop element in a FILO order', () => {
        stack.push(1);
        stack.push(3);
        expect(stack.empty).toBeFalsy();
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(1);
        expect(stack.empty).toBeTruthy();
    });


    test('Stack.peek() should return the element on the top of the stack', () => {
        stack.push(1);
        stack.push(7);
        stack.push(3);
        expect(stack.peek()).toBe(3);
    });
});
