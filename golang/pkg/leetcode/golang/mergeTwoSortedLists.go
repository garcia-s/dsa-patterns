package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {

	if list1 == nil {
		return list2
	}

	if list2 == nil {
		return list1
	}
	//Create a new head which we will return
	head := &ListNode{}
	i := head
	for {
		if list1 == nil || list2 == nil {
			break
		}
		//We insert whatever it's smaller into the new list (through the current item)
		//And move the corresponding list forward
		if list1.Val < list2.Val {
			i.Next = list1
			list1 = list1.Next
		} else {
			i.Next = list2
			list2 = list2.Next
		}
		// We move the current item forward before the next iteration
		i = i.Next
	}

	//Any item(s) remaining should be higher than the last one
	//because the linked lists are orderer.
	//So we append them to the end of the list
	if list1 != nil {
		i.Next = list1
	} else {
		i.Next = list2
	}
	return head.Next
}

