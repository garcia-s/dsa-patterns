class _Node<T> {
  final T value;
  _Node<T>? next;

  _Node(this.value);
}

class DoublyLikedList<T> {
  _Node<T>? head;
  _Node<T>? _tail;
  int _len = 0;

  int get len => _len;

  void append(T value) {}

  void prepend(T value) {}

  T pop() {}
}
