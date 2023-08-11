# Things to consider after implementing this in multiple languages


    1. Dart string concatenation is extremely slow, this might be due to dart creating a copy of the string every time you add something.
    2. Python doesn't seem to have the same problem concatenating strings, which is to be expected since python should be better optimize for scripting.
    3. Dart seems to be better at creating a list of strings/characters and then joining them together, since I think it might just be a change to the type since list are adjacent memory.
    4. Dart's best time is around 20ms for 25000 words and python's best time is about 3ms. This doesn't mean that python is just faster, since there is no way dart is using JIT to run a single function
    5. Also apparently around 25000 words is the maximum amount you can to a command line tool.



