import { EventEmitter } from "../../src/patterns/event_emitter";


describe('EventEmitter tests', () => {
    test("Deberia emitir al listener registrado", () => {
        // Arrange
        const emitter = new EventEmitter();
        const callback = jest.fn()
        //Act
        emitter.on("test", callback)
        emitter.emit("test", {})
        //Assert
        expect(callback).toHaveBeenCalledTimes(1)
    });

    test("Deberia emitir a toda la lista de listeners", () => {
        // Arrange
        const emitter = new EventEmitter();
        const callback1 = jest.fn()
        const callback2 = jest.fn()
        //Act
        emitter.on("click", callback1)
        emitter.on("click", callback2)

        emitter.emit("click", {})
        //Assert
        expect(callback1).toHaveBeenCalledTimes(1)
        expect(callback2).toHaveBeenCalledTimes(1)
    });
});

