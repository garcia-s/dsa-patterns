

# CSharp things, and stuff

You declare variables with:


```csharp

string name = "Juan";
// But you could also do it with var

var name2 = "Juan";

```


There are tree ways to create data types in CSharp

```csharp
// Classes can have private, public, abstract, internal and file
class MyClass {
// we have some sugar for getters and setters
    private string MyThing {get; set; }; 
}
// We can have interfaces too

interface IMyInterface {
    void WhateverMeth();
}

// Structs are stored in the stack so maybe don't use it as primary way to store stuff
struct MyStruct {
     public string whatA;
}

// Records are just a data container but they are immutable, which is pretty cool
record MyRecord(string whatA);

```
