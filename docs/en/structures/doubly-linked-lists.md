# Doubly Linked Lists

Doubly Linked lists are a variation on Linked Lists, they save to pointers (or references) one to the previous andone to the next item. This makes it easier to delete and insert both the last and first item of the list. This is because, when you have only one reference you have to iterate the through the list in some cases, even if you savehead (first element of the list) and the tail (last element of the list).

In a normal singly linked list, to remove the last element of the list (assuming you are linking to the next), you'll have to iterate until the second to last element, to get a reference to it. Once you get that reference you can point the tail to that element and delete the reference to the current last one. This produces a O(n) time complexity. 

In a __doubly linked list__ you won't have to iterate, you can just point the tail to the __last.previous__ and delete the reference to next, which makes it a constant time (O(1)) operation. This, however, has the drawback of storing one extra reference for each item (the reference to the previous element) which is a common tradeoff for some optimization techniques, switching memory complexity for time complexity. 


### When to use them

In the context of a linked list, doubly linked lists are useful when you need to do insertions and deletions in both the head or the tail. They can be used as a queue for example, inserting on one end and, taking from the other end.

Examples: 

- [Typescript](../../../typescript/src/structures/doubly_linked_list.ts)
- [Golang](../../../golang/pkg/structures/doublylinkedlist/doublylinkedlist.go)
- [C#](../../../csharp/Structures/Structures/LinkedList.cs)
