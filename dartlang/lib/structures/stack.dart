class _Node<T> {
  final T value;
  _Node<T>? next;

  _Node(this.value);
}

class Stack<T> {
  _Node<T>? _head;

  int _size = 0;

  bool get isEmpty => _size == 0;

  int get size => _size;

  void push(T val) {
    final node = _Node<T>(val);
    if (_head != null) node.next = _head;
    _head = node;
    _size++;
  }

  T? pop() {
    final curr = _head;
    if (curr == null) return null;
    _head = _head?.next;
    _size--;
    return curr.value;
  }

  T? peek() => _head?.value;
}
