# Linked Lists

Linked lists are a type of data structure used to store a sequence of elements, unlike arrays they aren't stored in contiguous memory locations, instead we used nodes that are connected by pointers (or references).

Each node in a linked list typically consists of two components: 

1- Data - The actual value stored in the node
2- Pointer (or reference) - A link to another node in the sequence.

Now, depending on the type of linked list, we might have a reference to the next node and one to the previous node, allowing traversal in both directions. The ones with two references are called doubly linked lists, and you can find them [here](./doubly-linked-lists.md)

### Advantages over arrays

- Dynamic Size – Linked lists are dynamic by nature; they grow and shrink as needed.
- Really efficient insertions and deletions: The time complexity or deleting in a linked list is __constant__ (O(1)). But for arrays it can be as bad as linear time (O(N)).
- No Pre-Allocation Needed – We don't need to preemptively request memory, unlike dynamic arrays or ArrayLists.

### Disadvantages over arrays

- Some extra memory is needed: Each node requires a bit more memory for the pointer(s)
- No random access: With arrays you have something like ```arr[3]``` to access the fourth element, and it's accessed in constant time (O(1)). We don't have that with a normal implementation of a linked list, if you want to access the fourth element you'll have traverse to that element which done in linear time (O(1)).


### When to use them

Linked lists really shine when you need few random access reads but many insertions and deletions at the start or at the end of the list (since you don't have to traverse).

In my experience, I've seen them used mostly as [queues](./queues.md) (a First In, First Out data structure) and [stacks](./stacks.md) (a First In, Last Out data structure).

You can implement random access with tabulation to optimize access speeds, but this adds complexity and requires a very specific use case.


Examples: 

- [Typescript](../../../typescript/src/structures/doubly_linked_list.ts)
- [Golang](../../../golang/pkg/structures/linked_list/linked_list.go)
- [C#](../../../csharp/Structures/Structures/LinkedList.cs)
