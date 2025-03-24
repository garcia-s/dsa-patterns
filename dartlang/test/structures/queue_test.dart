import 'package:dartlang/structures/queue.dart';
import 'package:test/test.dart';

void main() {
  group("Queue tests", () {
    test("Should be initialized empty", () {
      final queue = Queue<int>();
      expect(queue.isEmpty, true);
      expect(queue.size, 0);
    });

    test("Should enqueue elements correctly", () {
      final queue = Queue<int>();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.isEmpty, false);
      expect(queue.size, 3);
      expect(queue.peek(), isNotNull);
    });

    test("Should poll elements in FIFO order", () {
      final queue = Queue<int>();
      queue.enqueue(10);
      queue.enqueue(20);
      queue.enqueue(30);

      expect(queue.poll(), 10);
      expect(queue.size, 2);

      expect(queue.poll(), 20);
      expect(queue.size, 1);

      expect(queue.poll(), 30);
      expect(queue.size, 0);
      expect(queue.isEmpty, true);
    });

    test("Should peek at the first element without removing it", () {
      //Arrange
      final queue = Queue<int>();
      //Act
      queue.enqueue(5);
      queue.enqueue(15);
      //Assert
      expect(queue.peek(), 5);
      expect(queue.size, 2);
    });

    test("Should return null while polling on an empty queue", () {
      final queue = Queue<int>();
      expect(queue.poll(), null);
    });

    test("Should return null while peeking an empty queue", () {
      final queue = Queue<int>();
      expect(queue.peek(), null);
    });
  });
}
