import { EventEmitter } from "../../src/patterns/event_emitter";

type Events = {
    message: string;
    error: { code: number; message: string };
    data: number[];
};

describe('EventEmitter tests', () => {
    let emitter: EventEmitter<Events>;

    beforeEach(() => {
        emitter = new EventEmitter<Events>();
    });

    test('should register and emit events', () => {
        const callback = jest.fn();
        emitter.on('message', callback);

        emitter.emit('message', 'Hello, world!');

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('Hello, world!');
    });

    test('should register multiple listeners for the same event', () => {
        const callback1 = jest.fn();
        const callback2 = jest.fn();

        emitter.on('message', callback1);
        emitter.on('message', callback2);

        emitter.emit('message', 'Hello!');

        expect(callback1).toHaveBeenCalledTimes(1);
        expect(callback2).toHaveBeenCalledTimes(1);
        expect(callback1).toHaveBeenCalledWith('Hello!');
        expect(callback2).toHaveBeenCalledWith('Hello!');
    });

    test('should remove specific listener', () => {
        const callback = jest.fn();

        emitter.on('message', callback);
        emitter.off('message', callback);

        emitter.emit('message', 'This should not be logged.');

        expect(callback).not.toHaveBeenCalled();
    });


    test('should support one-time listeners', () => {
        const callback = jest.fn();

        emitter.once('message', callback);

        emitter.emit('message', 'First call');
        emitter.emit('message', 'Second call');

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('First call');
    });

    test('should emit events with object payloads', () => {
        const callback = jest.fn();

        emitter.on('error', callback);

        const errorPayload = { code: 404, message: 'Not Found' };
        emitter.emit('error', errorPayload);

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(errorPayload);
    });

    test('should handle multiple events independently', () => {
        const messageCallback = jest.fn();
        const errorCallback = jest.fn();

        emitter.on('message', messageCallback);
        emitter.on('error', errorCallback);

        emitter.emit('message', 'Hello, EventEmitter!');
        emitter.emit('error', { code: 400, message: 'Bad Request' });

        expect(messageCallback).toHaveBeenCalledTimes(1);
        expect(messageCallback).toHaveBeenCalledWith('Hello, EventEmitter!');

        expect(errorCallback).toHaveBeenCalledTimes(1);
        expect(errorCallback).toHaveBeenCalledWith({ code: 400, message: 'Bad Request' });
    });


    test('Should clear all listeners for an event', () => {
        const callback1 = jest.fn();
        const callback2 = jest.fn();

        emitter.on('message', callback1);
        emitter.on('message', callback2);
        emitter.clearAll();

        emitter.emit('message', 'No listeners should be called.');

        expect(callback1).not.toHaveBeenCalled();
        expect(callback2).not.toHaveBeenCalled();
    });

    test('should clear all listeners for all events', () => {
        const messageCallback = jest.fn();
        const errorCallback = jest.fn();

        emitter.on('message', messageCallback);
        emitter.on('error', errorCallback);
        emitter.clearAll();

        emitter.emit('message', 'Message!');
        emitter.emit('error', { code: 500, message: 'Server Error' });

        expect(messageCallback).not.toHaveBeenCalled();
        expect(errorCallback).not.toHaveBeenCalled();
    });
});

