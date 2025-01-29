# Linked Lists

Linked lists are a type of data structure used to store a sequence of elements, unlike arrays they aren't stored in contiguous memory locations, instead we used nodes that are connected by pointers (or references).

Each node in a linked list typically consists of two components: 

1- Data - The actual value stored in the node
2- Pointer (or reference) - A link to another node in the sequence.

Now depeding on the __type__ of the linked list we might have a reference to the next node and one to the previousnode so we can go back and/or forward. The ones with two references are called __doubly linked lists__ and you canfind them [here](./doubly-linked-lists.md)

### Advantages over arrays

- Dynamic Size: Linked lists are dynamic by nature, they grow and shrink as you need.
- Really efficient insertions and deletions: The time complexity or deleting in a linked list is __constant__ (O(1)). But for arrays it can be as bad as linear time (O(N)).
- No pre-allocation needed: We don't need to preemptively request for memory as in a dynamic array or ArrayList.


### Disadvantages over arrays

- Some extra memory is needed: Each node requires a bit more memory for the pointer(s)
- No random access: With arrays you have something like ```arr[3]``` to access the fourth element, and it's accessed in constant time (O(1)). We don't have that with a normal implementation of a linked list, if you want to access the third element by traversing to that element which is in linear time (O(1)).


### When to use them

Linked lists really shine when you need a low number of random access reads and tons of insertions and deletions, 
in my experience I've seen them the most in the form of [queues](./queues.md) (a First in first out data structure) and [stacks](./stacks.md) (A first in last out data structure).

You can have a random access implementation with tabulation to optimize the random access speeds, but this ads tons of complexity and requires a very specific use case. 

Examples: 

- [Typescript](../../../typescript/src/structures/doubly_linked_list.ts)
