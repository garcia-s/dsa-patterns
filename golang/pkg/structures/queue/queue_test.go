package queue

import "testing"

func TestEnqueue(t *testing.T) {
	q := Queue[int]{}

	elements := []int{1, 2, 3}

	for i := 0; i < len(elements); i++ {
		q.Enqueue(elements[i])
	}

	if q.Size() != len(elements) {
		t.Error("Error: Queue size is inconsistent with the queued elements")
	}

	for i := 0; i < len(elements); i++ {

		if e, _ := q.Poll(); *e != elements[i] {
			t.Errorf("Error: The element %d was not queued or retrieved properly", i)
		}

		if q.Size() != len(elements)-i-1 {
			t.Error("Error: Queue size is inconsistent with the queue")
		}
	}
}

func TestPoll(t *testing.T) {

	q := Queue[int]{}

	q.Enqueue(30)

	if v, _ := q.Poll(); *v != 30 {
		t.Error("Error: Polled element is different than the queued element")
	}

	q.Enqueue(40)
	q.Enqueue(50)

	if v, _ := q.Poll(); *v != 40 {
		t.Error("Error: Polled element is different than the queued element")
	}

	q.Enqueue(20)

	if v, _ := q.Poll(); *v != 50 {
		t.Error("Error: Polled element is different than the queued element")
	}

	if v, _ := q.Poll(); *v != 20 {
		t.Error("Error: Polled element is different than the queued element")
	}
}

