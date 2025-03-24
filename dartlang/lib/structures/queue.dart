class _Node<T> {
  _Node<T>? next;
  final T value;

  _Node(this.value);
}

class Queue<T> {
  _Node<T>? _head;
  _Node<T>? _tail;
  int _size = 0;

  bool get isEmpty => _size == 0;

  int get size => _size;

  enqueue(T value) {
    final node = _Node<T>(value);

    if (_size == 0) {
      _head = _tail = node;
      _size++;
      return;
    }

    _tail!.next = node;
    _tail = node;
    _size++;
  }

  T? poll() {
    if (_size == 0) return null;

    final node = _head;

    if (_size == 1) {
      _head = _tail = null;
      _size--;
      return node!.value;
    }

    _head = node!.next;
    _size--;
    return node.value;
  }

  T? peek() => _head?.value;
}
