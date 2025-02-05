# Understanding floating point arithmetic in programming

Have you ever tried summing 0.1 + 0.2 in mostly any programming language? The result for anybody who has tried this is probably 0.300...4. Yes a bunch of zeros and a four at the end. This is actually the "intended" behavior and it has to do with the way floating point numbers are represented in memory.

This happens because we can't actually represent floating point numbers like we do with integers. If you think about it, there is an infinite amount of numbers between just 0 and 1. And we don't have infinite memory. And as with strings we rely on __encoding__.

The floating point specification is [IEEE 745]() one of those very few standards we have in the programming world. If you want to read it click the link above.

Now, we know we don't have enough bits to represents
