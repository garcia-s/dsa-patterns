# CodeWar's jadencase implementation for different languages

## Execution instructions

You need to pass the result of stub.py to the script you are trying to run

stub.py just create a string repeating the same word "Fake" the amount of times specified in the first argument 


for dart that would be:

``` dart ./jadencase.dart "`python ./stub.py 25000`" ```

for python that would be: 

``` python ./jadencase.py"`python ./stub.py 25000`" ```


### Dart

Dart seems to be slow when concatenating strings. What I guess it's doing, it's creating a new string into a different location in memory every time you concatenate two strings.
utilizing a list for of characters and joining it seems to fix the issue, since it goes from around 1000ms to 11ms while using a list of strings/characters


### Python

Python doesn't seem to have the same problem as with string concatenation, my guess would be that strings in python are treated exactly as a list, and concatenating to a string won't create a deep copy of the string as opposed to Dart. Also, strings are probably buffered since there seems to be no lost while adding to a string, which suggests that some amount of memory is preallocated instead of initializing the string just at the size it's declared.


### Golang

### PHP




