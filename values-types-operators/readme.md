# VALUES, TYPES & OPERATORS
In this project I had to learn and investigate in deep about the basics of programming and about the most common values, types and operators.

## What is a programming language?
In poor words a programming language is a set of instructions a computer can follow to do resolve a task. There are 3 main concepts:
### Function and target
Programming languages differ from natural languages in that natural languages are only used for interaction between people, while programming languages also allow humans to communicate instructions to machines.
### Abstractions
Each significant piece of functionality in a program should be implemented in just one place in the source code. Where similar functions are carried out by distinct pieces of code, it is generally beneficial to combine them into one by abstracting out the varying parts.
### Expressive power
The theory of computation classifies languages by the computations they are capable of expressing. All Turing complete languages can implement the same set of algorithms. ANSI/ISO SQL-92 and Charity are examples of languages that are not Turing complete, yet are often called programming languages
### Examples
Java, Python, Go, Perl, JavaScript, C#.

## What is a variable? Difference between local/global and why is recommended to avoid globals.
A variable is the name you give to computer memory location which is used to store values in a computer program. Global variables are accessible at any moment since the program starts until it ends. Local variables are created inside a function and are only accessible in the scope of that function.
**Parameter** | **Local** | **Global**
--- | --- | ---
**Scope** | Declared inside a function | Declared outside the function
**Value** | If not initialized, a garbage value is stored | If not initialized zero is stored as default.
**Lifetime** | Created when the function starts and lost when the functions terminates | Created before the program's global execution starts and lost when the program terminates.
**Data sharing** | Not possible as data can be accessed only by one function | Possible as multiple functions can access the same global variable.
**Parameters** | Required for local variables to access the value | Not necessary as it is visible throughout the program
**Modification of variable** | When the value is modified, the changes are not visible in another function | When the value is modified the changes are visible in the rest of the program.
**Accessed by** | Can be accessed with the help of statements, inside a function | Accessible by any statement in the program.
**Memory storage** | Stored on the stack unless specified | Stored on a fixed location decided by the compiler.

### Advantages of using Global variables
* You can access the global variable from all the functions or modules in a program
* You only require to declare global variable single time outside the modules.
* It is ideally used for storing "constants" as it helps you keep the consistency.
* A Global variable is useful when multiple functions are accessing the same data.

### Advantages of using Local Variables
* The use of local variables offer a guarantee that the values of variables will remain intact while the task is running
* If several tasks change a single variable that is running simultaneously, then the result may be unpredictable. But declaring it as local variable solves this issue as each task will create its own instance of the local variable.
* You can give local variables the same name in different functions because they are only recognized by the function they are declared in.
* Local variables are deleted as soon as any function is over and release the memory space which it occupies.

### Disadvantages of using Global Variables
* Too many variables declared as global, then they remain in the memory till program execution is completed. This can cause of Out of Memory issue.
* Data can be modified by any function. Any statement written in the program can change the value of the global variable. This may give unpredictable results in multi-tasking environments.
* If global variables are discontinued due to code refactoring, you will need to change all the modules where they are called.

### Disadvantages of using Local Variables
* The debugging process of a local variable is quite tricky.
* Common data required to pass repeatedly as data sharing is not possible between modules.
* They have a very limited scope.

### What is more useful?
The local and global variable equally important while writing a program in any language. However, a large number of the global variable may occupy a huge memory. An undesirable change to global variables is become tough to identify. Therefore, it is advisable to avoid declaring unwanted global variables.

## Data types
Attribute of data which tells the compiler or interpreter how the programmer intends to use the data.

### Primitive data types
* **Integer numbers**: An integer data type represents some range of mathematical integers.
* **Fixed-point numbers**: A fixed-point number represents a limited-precision rational number that may have a fractional part.
* **Booleans**: A boolean type is typically a logical type that can have either the value `true` or the value `false`.  
* **Characters**: Char is defined as the smallest addressable unit of memory.
* **Strings**: Characters may be combined into strings. The string data can include numbers and other numerical symbols but is treated as text.

#### Composite types
* **Array**: stores a number of elements and provide random access to individual elements. 2D arrays stores a number defined number of arrays.
* **Union**: A union type definition will specify which of a number of permitted primitive types may be stored in its instances.
* **Record**: A record is a value that contains other values, typically in fixed number and sequence and typically indexed by names.

### Abstract data types
Any data type that does not expatiate on the concrete representation of the data is an abstract data type. Instead, a formal specification based on the data type's operations is used to describe it. Any implementation of a specification must fulfill the rules given. Abstract data types are used in formal semantics and program verification and, less strictly, in design.

### Other types
* **Pointers and references**: The main non-composite, derived type is the pointer, a data type whose value refers directly to (or "points to") another value stored elsewhere in the computer memory using its address. It is a primitive kind of reference. (In everyday terms, a page number in a book could be considered a piece of data that refers to another one). Pointers are often stored in a format similar to an integer; however, attempting to dereference or "look up" a pointer whose value was never a valid memory address would cause a program to crash. To ameliorate this potential problem, pointers are considered a separate type to the type of data they point to, even if the underlying representation is the same.
* **Function types**: Here, data is viewed as opposed to algorithms. In programming, functions are strongly related to the later. But because a central motive of universal data processing is, that algorithms can be represented as data, e.g. textual description and binary programs, the contrast of data and functions has its limits.
* **Meta types**: Some programming languages represent the type information as data, enabling type introspection and reflection. To the contrary, higher order type systems, while allowing to construct types from other types and pass them through functions like they were values, typically avoid to base computational decisions on them.
* **Utility types**: For convenience, high-level languages may supply ready-made "real world" data types, for instance times, dates and monetary values and memory, even where the language allows them to be built from primitive types.

## Logical operators
* **AND**: In classical programming, AND returns `true` if both operands are `true` and `false` otherwise.
* **OR**: In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are `true`, it returns `true`, otherwise it returns `false`.
* **NOT**: Converts the operand to boolean type: `true/false`. Returns the inverse value.

## Useful resources
* [JavaScript Reference vs Primitive](https://www.youtube.com/watch?v=9ooYYRLdg_g)
* [JavaScript Data Types](https://www.youtube.com/watch?v=edlFjlzxkSI)