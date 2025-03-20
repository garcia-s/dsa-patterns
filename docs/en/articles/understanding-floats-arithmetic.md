# The floating point problem
 
People, we have a problem. We need a way to represent an infinite amount of numbers withing a finite amount bytes. And you might think that is impossible (because it is) but we need to do it and we need to do it in a quarter of sprint. 

I can't imagine how or what Willian Kahan felt while facing that impossible problem, but at least  they didn't do Scrum back then, so, there is still good things.

Let's start from top, so we can understand this, because is kinda complicated and genius.

## Being naive 

Everything in computers are bits, it's all ones and zeroes. And floating point numbers are no different. And we represent integers in binary as a series of digits just as we do in the decimal system we all love. So why don't we just split the number in half? We can just take a number of 32 bits and use 16 bits for the number before the point and the other 16 bits to represent everything after the point. That is called a __fixed point number__ and now you know where we get the name from.

Fixed point numbers have a big problem, they are inefficient. And now in the days of Javascript fatigue we can take inefficiency as a plus, but back then, every bit was extremely important so we need a better solution. It's inefficient because even if we are just representing zero before the point we'll have to use 16 bits. and that is just a waste of space. 

So what if we could move that point, well that is the basis of the __floating point__ we can move it, and put it (sort of) wherever we want
