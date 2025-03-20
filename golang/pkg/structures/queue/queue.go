package queue

type node[T any] struct {
	value T
	next  *node[T]
	prev  *node[T]
}

type Queue[T any] struct {
	length int
	head   *node[T]
	tail   *node[T]
}

func (q *Queue[T]) Enqueue() {

}

func (q *Queue[T]) Dequeue() {

}

func (q *Queue[T]) Poll() {

}

func (q *Queue[T]) Peek() {

}
