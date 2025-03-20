package queue

type node[T any] struct {
	value T
	next  *node[T]
}

type Queue[T any] struct {
	size int
	head *node[T]
	tail *node[T]
}

func (q *Queue[T]) Empty() bool {
	return q.size == 0
}

func (q *Queue[T]) Size() int {
	return q.size
}

func (q *Queue[T]) Enqueue(value T) {
	n := &node[T]{value: value}

	if q.size == 0 {
		q.head = n
		q.tail = n
		q.size++
		return
	}

	q.tail.next = n
	q.tail = q.tail.next
	q.size++
}

func (q *Queue[T]) Poll() (value *T, ok bool) {
	if q.size == 0 {
		return nil, false
	}

	n := q.head

	if q.size == 1 {
		q.head = nil
		q.tail = nil
		q.size--
		return &n.value, true
	}

	q.head = q.head.next
	q.size--
	return &n.value, true
}

func (q *Queue[T]) Peek() (value *T, ok bool) {
	if q.size == 0 {
		return nil, false
	}
	return &q.head.value, true
}
