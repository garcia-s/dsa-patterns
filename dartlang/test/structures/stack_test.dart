import 'package:dartlang/structures/stack.dart';
import 'package:test/test.dart';

void main() {
  group("Testing Stack Implementation", () {
    test("Should start as an empty stack", () {
      //Arrange
      final stack = Stack<int>();
      //Act
      //Assert
      expect(stack.isEmpty, true);
      expect(stack.size, 0);
    });

    test("Should increase size when an object has been pushed", () {
      //Arrange
      final stack = Stack<int>();
      //Act
      stack.push(4);
      //Assert
      expect(stack.isEmpty, false);
      expect(stack.size, 1);
    });

    test("Should return the item and reduce the size when poped", () {
      //Arrange
      final stack = Stack<int>();
      //Act
      stack.push(4);
      //Assert
      expect(stack.pop(), 4);
      expect(stack.size, 0);
    });

    test("Should return the item and maintain the size when peeked", () {
      //Arrange
      final stack = Stack<int>();
      //Act
      stack.push(4);
      //Assert
      expect(stack.pop(), 4);
      expect(stack.size, 0);
    });

    test("Should insert and retrieve things in a FILO order", () {
      //Arrange
      final stack = Stack<int>();
      //Act
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);

      //Assert
      expect(stack.pop(), 4);
      expect(stack.size, 3);

      expect(stack.pop(), 3);
      expect(stack.size, 2);

      expect(stack.pop(), 2);
      expect(stack.size, 1);

      expect(stack.pop(), 1);
      expect(stack.size, 0);
    });
  });
}
