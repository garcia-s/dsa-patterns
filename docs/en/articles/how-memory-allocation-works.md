# How does memory allocation work?


Allocating memory is the process of assigning memory to be used by a program. This can be done manually or automatically, we will discuss manual memory allocation in this article but there are ways to automate this. Even while that's the case it's always good to know how memory works.

So memory is just the "physical space" we can use to store data, more specifically temporary data used by our program, with this there are a couple of concepts that we have to explain.


### Stack memory.

A stack is a common data structure in software with a LIFO (Last in first Out) order. The last item is placed at the top of the stack and it's dealt with first.

Stack memory is a temporary storage with this quality, stores data for functions and it's a key part of how programs maintain and execute function context. 

When we pass a variable (as value) to a function and it's not outside that function the memory is allocated here, not in the heap.

Stack allocations are very fast, and have very fast cleanup but they come with several drawbacks, here are some of the cons:

- Fixed total memory: there is a limit to how much stack memory you could have, the underlying OS is not just going to let you allocate 20gb of memory on the stack.

- Fixed Sizes: You don't always know how much memory you need, and stack memory is not dynamic. Although possible in some languages and OSes this is not something common.

- Fixed Lifetime: The lifetime of a variable in the stack will only exist inside a this function context. You could have pointers to stack memory but it'll be a dangling pointer (A pointer that points to an invalid or deallocated memory) after that memory is freed.


Ideally you want to use stack memory as much as possible since it's so fast, but due to this limitations you might have to use something else.


### Heap Memory

Heap memory is a region of computer memory that is used for dynamic allocations. You can ask for more memory whenever you want, and you'll get a bit more (but you should give it back when you are done with it, please).

Normally, Operating Systems expose a standard ABI to ask for this memory, but operating systems don't count memory in bytes, they actually count it as blocks of memory called pages. For most Operating Systems (Windows, Linux, Android and Mac) that is 4KB. But other page sizes are supported by other Operating Systems.

With the previous knowledge we can infer that requesting a page when you need something like 16 bytes, is extremely wasteful. You get 4 KB for you to use, and you are only using an incredibly 


