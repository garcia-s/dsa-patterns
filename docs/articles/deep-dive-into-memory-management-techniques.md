
# A Deep Dive into Automatic Memory Management Techniques.

So, we all know memory exists. I mean "we" as in "us programmers." But this is not just a magical resource that manages itself in high-level languages—it uses some techniques that, depending on the situation, can be either a blessing or a curse.

This memory we are talking about is not something we have direct access to; it's actually controlled by the underlying operating system. If we want more of this memory, we have to politely ask our __papa OS__. We also need to be good OS citizens and tell the OS when we’re no longer using that memory so other applications can reuse it.

In languages like C or C++, we handle this manually. We need to free memory using special functions (provided by the language) that tell the OS what to delete. But this introduces the other problems:

- Memory Leaks

As in, "Dang, I forgot to release the memory I used, and now the program is using more RAM than Chrome." This happens when you don’t clean up after yourself (in code).

- Double frees

You have some memory. You tell the OS you don’t need it anymore. Then you tell it again that you don’t need it. This causes all sorts of undefined behavior because you could accidentally free the memory of another program, potentially crashing it.

- Use After Free

Just as it sounds—some weird behavior can occur if you access memory you’ve already freed. Maybe someone else is using it, and you get invalid data that brings your entire program down or to a halt.


These problems are common and are the reason why programming in C, C++, or any fairly low-level language is so hard. Tracking memory in large applications is, in fact, a nightmare. This doesn’t mean low-level languages are bad; in fact, they are the most performant languages and are extremely useful for things like operating system development. But (arguably) we don’t need the same level of performance for our calculator app. And it’s much better if my calculator couldn’t bring my whole system down.

## The Naive Approach to Automatic Memory: Reference Counting

Let me make this clear before we jump in: the naive approach is not useless; in fact, it is very useful. But, it has some limitations that we are going to discuss in a moment.

__Reference Counting__ is actually quite simple. You have a counter for every piece of data, and you increase it for every reference and decrease it when the reference is no longer available. If the counter reaches zero, you can delete that piece of data from memory since nothing else is using it (because, to use it, you need a reference. If no part of the application has one, nothing can access it).


We can see why these languages might be a bit slower: there is now some overhead for every variable, along with extra operations we have to perform on each piece of data.


We can also get a (sort of) memory leak due to __circular references__. For example, if we have a variable __"a"__ and it has a reference to __"b"__, and __"b"__  also references __"a__, the counters for both __a__ and __b__ will never be zero. 

## Basic Garbage Collection: 
