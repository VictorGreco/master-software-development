# program-structures Theory
On this module I have to go in deep on how functions, naming, conditionals and iterations works. I will do it for the following languages: `JavaScript`, `Java`, `PHP`, `Go`, `Python`, `C#`. 

## Naming Rules
In computer programming, a naming convention is a set of rules for choosing the character sequence to be used for identifiers which denote variables, types, functions, and other entities in source code and documentation.

### Advantages
* to provide additional information about the use to which an identifier
* to help formalize expectations and promote consistency within a development team
* to enable the use of automated refactoring or search and replace tools
* to enhance the aesthetic and professional appearance of work product
* to help avoid "naming collisions"
* to provide meaningful data to be used in project handovers and better understanding

### Disadvantages
* Each programming language uses it's own convention
* Could be challenging to agree on a common naming
* Automatic process could fail or underperform if not followed

### Flat case
`flatcase` and `UPPERFLATCASE` are not commonly used as the readability is not really good when you have to deal with multiple words naming.

### Camel Case
`camelCase` borns in order to improve the readability of flat case convention. Is commonly used in JavaScript and java to name variables which are not constants. It's also used to name brands or products such as `iPhone` or `eBay`.  

### Pascal Case
`PascalCase` is commonly used to name Pascal, Java and JavaScript class and interface files.

### Snake Case
`snake_case` used in python to name variables, functions and methods. Personally I like this naming a lot as readability is very good.
`SCREAMING_SNAKE_CASE` also known as `MACRO_CASE` is a good practice to name constant variables and C processor macros.

### Kebab Case
`kebab-case` doesn't have a defined convention but on my personal case I like to use it for folder and repository naming.
`TRAIN-CASE` is the same concept but with capitalized letters.
`HTTP-Header-Case` is an extended convention to name HTTP request headers.   


https://en.wikipedia.org/wiki/Letter_case#Special_case_styles

## Reserved words and keywords
**Reserved words** are words that cannot be used as an identifier, such as the name of  a variable, function, label ... This is a syntactic definition, and a reserved word may have no meaning.
**Keywords** are reserved words as a string of characters will unambiguously be either a keyword or an identifier, usually a subset of reserved words.

### JavaScript
```js
await break case catch class const continue debugger default delete do
else enum export extends false finally for function if implements import
in instanceof interface let new null package private protected public
returnsuper switch static this throw try True typeof var void while with yield
```

[All JavaScript keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)

### Java
```java
abstract assert boolean break byte case catch char class const continue default
do double else enum extends final finally float for goto if implements import instanceof
int interface long native new package private protected public return short static
strictfp super switch synchronized this throw throws transient try void volatile while
```

[All Java keywords](https://en.wikibooks.org/wiki/Java_Programming/Keywords)

### Python
```python
False def if raise None del import return True elif in try and else is while as except
lambda with assert finally nonlocal yield break for not class from or continue global pass
```

[All Python keywords](https://realpython.com/lessons/reserved-keywords/)

### Go
```go
break default func interface select case defer go map struct chan else goto package
switch const fallthrough if range type continue for import return var
```

[All Go keywords](https://notes.shichao.io/golang/#:~:text=Keywords%20or%20reserved%20words%20are,%2C%20import%20%2C%20return%20%2C%20var%20)

### PHP
```php
__halt_compiler() abstract and array() as break callable case catch class clone const
continue declare default die() do echo else elseif empty() enddeclare endfor 
endforeach endif endswitch endwhile eval() exit() extends final finally fn for foreach 
function global goto if implements include include_once instanceof insteadof interface 
isset() list() namespace new or print private protected public require require_once 
return static switch throw trait try unset() use var while xor yield yield from
```

[All PHP keywords](https://www.php.net/manual/en/reserved.keywords.php)

### C#
```c
abstract as base bool break byte case catch char checked class const continue decimal 
default delegate do double else enum event explicit extern false finally fixed float 
for foreach goto if implicit in int interface internal is lock long namespace new null 
object operator out override params private protected public readonly ref return sbyte
sealed short sizeof stackalloc static string struct switch this throw true try typeof
uint ulong unchecked unsafe ushort using virtual void volatile
```

[All C# keywords](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/)

## Functions, parameters and arguments

what are the different return values in functions what is the return keyword used for?  Is  it possible to  store the result of a function in a variable ? Example ?
### JavaScript
```js
```
### Java
```java
```
### Python
```python
```
### Go
```go
```
### PHP
```php
```
### C#
```c
```

## Loops vs Iterators

### For
#### JavaScript
```js
```
#### Java
```java
```
#### Python
```python
```
#### Go
```go
```
#### PHP
```php
```
#### C#
```c
```

### While
#### JavaScript
```js
```
#### Java
```java
```
#### Python
```python
```
#### Go
```go
```
#### PHP
```php
```
#### C#
```c
```

### For In
#### JavaScript
```js
```
#### Java
```java
```
#### Python
```python
```
#### Go
```go
```
#### PHP
```php
```
#### C#
```c
```

### For Each
#### JavaScript
```js
```
#### Java
```java
```
#### Python
```python
```
#### Go
```go
```
#### PHP
```php
```
#### C#
```c
```

### Iterate multidimensional arrays
Which iterator to use

## Switch vs If Else
What happens if not break ?

## Scope and Auto global variables

## Comments
### JavaScript
```js
```
### Java
```java
```
### Python
```python
```
### Go
```go
```
### PHP
```php
```
### C#
```c
```

## Dive-in the language
### JavaScript

### Java

### Python

### Go

### PHP

### C#