# The quicksort algorith

Quicksort it's actually pretty easy to understand. It uses the __divide and conquer technique__ to sort an arrayquicksort sorts elements in-place, so there might be some extra benefits, since asking for memory to the os through syscalls is a reasonably expensive operation, even in garbage collected languages. But first you have to pick a __pivot__.

### Choosing the pivot

The pivot is the element on the list that we are going to use to subdivide our list and start solving the problem. These are the common approaches:

- Always pick the first or last element: Pretty straightforward we choose first or last.

- Pick a random element: Again, pretty easy to understand, just pick a random number. This is a good approach because it minimizes the chances of having a worse case scenario. 

- Pick the median element: This is a really good approach but, median can only be found in linear time so on average it will take more time because of the overhead of finding the median.


This time we are going to use a median of three, but depending on the situation another pivot technique could yield better resuls.

### Partionining

Then we have to rearrange the elements in the so that all elements smaller that the pivot are on one side and all greater elements are on the other side (Depending on how we want to sort them).

### Recurse or iterate

After partitioning we can either use recurse or iterate through the list. Some caveats are necessary to explain the difference between the two approaches.

- Iterative: For the iterative version we need to introduce a Stack or liked list structure to keep track things through the operation, this introduces some extra memory overhead and depending on the performance of the stack it could be slower. Iterative is also more complex to write.


This thread on [Stack overflow](https://stackoverflow.com/questions/12553238/quicksort-iterative-or-recursive) shows how the iterative version seems to be dependant on the stack's performance

- Recursive: This solution is simpler (and usually faster). However, most languages have limited recursion. So, sorting really large lists with a recursive approach might overflow the stack depending on the language. This usually happens when the __pivot__ selection is poor and results in unbalanced partitioning of the list.



