package linkedlist

import "testing"

func TestPrepend(t *testing.T) {
	ll := LinkedList[int]{}
	ll.Prepend(3)
	if ll.head == nil || ll.tail == nil {
		t.Error("Prepending to an empty list has a nil tail or head")
	}

	if ll.len != 1 {
		t.Error("Prepending to an empty doesn't increase the list's length")
	}

	ll.Prepend(7)

	if ll.head == ll.tail {
		t.Error("Prepending to a list with one item doesn't update the head correctly")
	}

	if ll.len != 2 {
		t.Error("Prepending to a list with one item doesn't update length")
	}
}

func TestAppend(t *testing.T) {

	ll := LinkedList[int]{}
	ll.Append(3)
	if ll.head == nil || ll.tail == nil {
		t.Error("Appending to an empty list has a nil tail or head")
	}

	if ll.len != 1 {
		t.Error("Appending to an empty doesn't increase the list's length")
	}

	ll.Append(7)

	if ll.head == ll.tail {
		t.Error("Appending to a list with one item doesn't update the head correctly")
	}

	if ll.len != 2 {
		t.Error("Appending to a list with one item doesn't update length")
	}
}

func TestPop(t *testing.T) {
	ll := LinkedList[int]{}
	ll.Append(7)
	ll.Append(7)
	ll.Append(4)

	arr := []int{7, 7, 4}
	for i := 2; i >= 0; i-- {
		val, ok := ll.Pop()
		if !ok || *val != arr[i] {
			t.Errorf("Pop function is producing the wrong output")
		}

		if ll.len != i {
			t.Error("Pop function is not updating the list's length correctly")
		}
	}
}

func TestPopFist(t *testing.T) {
	ll := LinkedList[int]{}
	ll.Append(7)
	ll.Append(7)
	ll.Append(4)

	arr := []int{4, 7, 7}
	for i := 2; i >= 0; i-- {
		val, ok := ll.PopFirst()
		if !ok || *val != arr[i] {
			t.Errorf("PopFirst function is producing the wrong output")
		}

		if ll.len != i {
			t.Error("PopFirst function is not updating the list's length correctly")
		}
	}
}
