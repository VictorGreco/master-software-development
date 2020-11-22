# **Data Structures**

## **Introduction**
In computer science, a [data structure](https://www.geeksforgeeks.org/data-structures/) is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

In order to store sequences of values we use the **Composite Types** category of [**Data Types**](https://en.wikipedia.org/wiki/Data_type). Some examples are **Arrays**, **Unions**, **Records**, **Sets**, **Objects**.

## **Arrays**
An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.
This makes it easier to calculate the position of each element by simply adding an offset to a base value. Arrays main properties are **length**, **prototype** and **constructor**.

### **Rotations**

#### **Using Temp array**
Use temp variable to move 1 and 2 values to the end of the array.

```
Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
1) Store the first d elements in a temp array
   temp[] = [1, 2]
2) Shift rest of the arr[]
   arr[] = [3, 4, 5, 6, 7, 6, 7]
3) Store back the d elements
   arr[] = [3, 4, 5, 6, 7, 1, 2]
```
Time complexity : O(n) <br>
Auxiliary Space : O(d)

<br>

#### **Rotate one by one**
Used a temp variable to iterate all the positions and move it one to  the left.

```
leftRotate(arr[], d, n)
start
  For i = 0 to i < d
    Left rotate all elements of arr[] by one
end
```
Time complexity : O(n * d) <br>
Auxiliary Space : O(1)

<br>

```js
// JavaScript version
const leftRotateByOne = (array, n) => {
    let temp = array[0];
    for (let i = 0; i < n-1; i++) {
        array[i] = array[i+1];
    }
    array[i] = temp;
}

const leftRotation = (array, d, n) => {
    for (let i = 0; i < d; i++) {
        leftRotateByOne(array, n);
    }
}
let array = [1, 2, 3, 4, 5, 6, 7],
    n = array.length();

leftRotation(array, 2, n);
```

```ts
// TypeScript version
const leftRotateByOne = (array: array, n: number):  void => {
    let temp: number = array[0];
    for (let i = 0; i < n-1; i++) {
        array[i] = array[i+1];
    }
    array[i] = temp;
}

const leftRotation = (array: array, d: number, n: number): void => {
    for (let i = 0; i < d; i++) {
        leftRotateByOne(array, n);
    }
}
let array: array = [1, 2, 3, 4, 5, 6, 7],
    n: number = array.length();

leftRotation(array, 2, n);
```

```php
// PHP version

function leftRotatebyOne($arr, $n) 
{ 
    $temp = $arr[0]; 
    for ($i = 0; $i < $n - 1; $i++) 
        $arr[$i] = $arr[$i + 1];
  
    $arr[$i] = $temp; 
} 
  
function leftRotate($arr, $d, $n) 
{ 
    for ($i = 0; $i < $d; $i++) 
        leftRotatebyOne($arr, $n); 
}

$arr = array( 1, 2, 3, 4, 5, 6, 7 ); 
$n = sizeof($arr); 
  
leftRotate($arr, 2, $n); 
?> 
```

```java
// Java version

class RotateArray { 
    void leftRotate(int arr[], int d, int n) 
    { 
        for (int i = 0; i < d; i++) 
            leftRotatebyOne(arr, n); 
    } 

    void leftRotatebyOne(int arr[], int n) 
    { 
        int i, temp; 
        temp = arr[0]; 
        for (i = 0; i < n - 1; i++) 
            arr[i] = arr[i + 1]; 
        arr[i] = temp; 
    } 
  
    public static void main(String[] args) 
    { 
        RotateArray rotate = new RotateArray(); 
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 }; 
        rotate.leftRotate(arr, 2, 7); 
    } 
} 
```

```py
# Python 3 version
def leftRotate(arr, d, n): 
    for i in range(d): 
        leftRotatebyOne(arr, n) 
  
def leftRotatebyOne(arr, n): 
    temp = arr[0]
    for i in range(n-1): 
        arr[i] = arr[i + 1] 
    arr[n-1] = temp 

  
arr = [1, 2, 3, 4, 5, 6, 7] 
leftRotate(arr, 2, 7) 
```

```c#
// C# version
using System;

class GFG { 
    static void leftRotate(int[] arr, int d, int n) 
    { 
        for (int i = 0; i < d; i++) 
            leftRotatebyOne(arr, n); 
    } 
  
    static void leftRotatebyOne(int[] arr, int n) 
    { 
        int i, temp = arr[0]; 
        for (i = 0; i < n - 1; i++) 
            arr[i] = arr[i + 1]; 
  
        arr[i] = temp; 
    } 
  
    public static void Main() 
    { 
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 }; 
        leftRotate(arr, 2, 7); 
    } 
} 
```
<br>

#### **Rotate Juggling Algorithm**

<img src="../resources/juggling_algorithm.jpg" width="400px">

```
Let arr[] be {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}

a) Elements are first moved in first set

ArrayRotation
          arr[] after this step --> {4 2 3 7 5 6 10 8 9 1 11 12}

b)    Then in second set.
          arr[] after this step --> {4 5 3 7 8 6 10 11 9 1 2 12}

c)    Finally in third set.
          arr[] after this step --> {4 5 6 7 8 9 10 11 12 1 2 3}
```

Time complexity : O(n) <br>
Auxiliary Space : O(1)

<br>

```js
// JavaScript implementation

const rotateArray = (array, d, n) => {
    d = d % n;
    let g_c_d = gcd(d, n);

    for (let i = 0; i < g_c_d; i++) { 
        let temp = arr[i]; 
        let j = i;

        while (true) { 
            let k = j + d;

            if (k >= n) {
                k = k - n;
            }

            if (k == i) {
                break;
            }
            
            arr[j] = arr[k]; 
            j = k; 
        } 
        arr[j] = temp; 
    } 
}

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

array = [1, 2, 3, 4, 5, 6, 7];
n = array.length();
d = 2;
leftRotate(array, d, n);
```

```java
// Java implementation

class RotateArray { 
    void leftRotate(int arr[], int d, int n) 
    { 
        d = d % n; 
        int i, j, k, temp; 
        int g_c_d = gcd(d, n);
        for (i = 0; i < g_c_d; i++) { 
            temp = arr[i]; 
            j = i;

            while (true) { 
                k = j + d; 
                if (k >= n) 
                    k = k - n; 
                if (k == i) 
                    break; 
                arr[j] = arr[k]; 
                j = k; 
            } 
            arr[j] = temp; 
        } 
    } 
  
    int gcd(int a, int b) 
    { 
        if (b == 0) 
            return a; 
        else
            return gcd(b, a % b); 
    } 
  
    public static void main(String[] args) 
    { 
        RotateArray rotate = new RotateArray(); 
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 }; 
        rotate.leftRotate(arr, 2, 7); 
    } 
} 
```

```py
# Python3 implementation

def leftRotate(arr, d, n): 
    d = d % n 
    g_c_d = gcd(d, n) 
    for i in range(g_c_d): 
          
        temp = arr[i] 
        j = i 
        while 1: 
            k = j + d 
            if k >= n: 
                k = k - n 
            if k == i: 
                break
            arr[j] = arr[k] 
            j = k 
        arr[j] = temp 
  
def gcd(a, b): 
    if b == 0: 
        return a; 
    else: 
        return gcd(b, a % b) 
  
arr = [1, 2, 3, 4, 5, 6, 7] 
n = len(arr) 
d = 2
leftRotate(arr, d, n)
printArray(arr, n)
```

```c#
// C# implementation

using System; 
  
class GFG { 
    static void leftRotate(int[] arr, int d, 
                           int n) 
    { 
        int i, j, k, temp; 
        d = d % n;
        int g_c_d = gcd(d, n); 
        for (i = 0; i < g_c_d; i++) { 
            temp = arr[i]; 
            j = i; 
            while (true) { 
                k = j + d; 
                if (k >= n) 
                    k = k - n; 
                if (k == i) 
                    break; 
                arr[j] = arr[k]; 
                j = k; 
            } 
            arr[j] = temp; 
        } 
    }
  
    static int gcd(int a, int b) 
    { 
        if (b == 0) 
            return a; 
        else
            return gcd(b, a % b); 
    } 
  
    public static void Main() 
    { 
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 }; 
        leftRotate(arr, 2, 7); 
    } 
} 
```

### **Reversal Algorithm**

```
rotate(arr[], d, n)
  reverse(arr[], 1, d) ;
  reverse(arr[], d + 1, n);
  reverse(arr[], 1, n);
```

Let AB are the two parts of the input array where `A = arr[0..d-1]` and `B = arr[d..n-1]`. The idea of the algorithm is :

* Reverse `A` to get `ArB`, where `Ar` is reverse of `A`.
* Reverse `B` to get `ArBr`, where `Br` is reverse of `B`.
* Reverse all to get `(ArBr) r = BA`.

Time Complexity : O(n)

<br>

```c#
// C# implementation

using System; 
  
class GFG { 

    static void leftRotate(int[] arr, int d) 
    { 
  
        if (d == 0) 
            return; 
        int n = arr.Length; 
        // in case the rotating factor is 
        // greater than array length 
        d = d % n; 
        reverseArray(arr, 0, d - 1); 
        reverseArray(arr, d, n - 1); 
        reverseArray(arr, 0, n - 1); 
    } 

    static void reverseArray(int[] arr, int start, 
                             int end) 
    { 
        int temp; 
        while (start < end) { 
            temp = arr[start]; 
            arr[start] = arr[end]; 
            arr[end] = temp; 
            start++; 
            end--; 
        } 
    }
  
    public static void Main() 
    { 
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 }; 
        int n = arr.Length; 
        int d = 2; 
  
        leftRotate(arr, d); // Rotate array by 2 
    } 
} 
```

```py
# Python implementatio
  
def reverseArray(arr, start, end): 
    while (start < end): 
        temp = arr[start] 
        arr[start] = arr[end] 
        arr[end] = temp 
        start += 1
        end = end-1  
  
def leftRotate(arr, d): 
  
    if d == 0: 
        return
    n = len(arr) 
    # in case the rotating factor is 
    # greater than array length 
    d = d % n 
    reverseArray(arr, 0, d-1) 
    reverseArray(arr, d, n-1) 
    reverseArray(arr, 0, n-1)  
  
arr = [1, 2, 3, 4, 5, 6, 7] 
n = len(arr) 
d = 2
  
leftRotate(arr, d)  # Rotate array by 2 
```

```java
// Java implementation

class LeftRotate {
    static void leftRotate(int arr[], int d) 
    { 
  
        if (d == 0) 
            return; 
  
        int n = arr.length; 
        // in case the rotating factor is 
        // greater than array length 
        d = d % n; 
        reverseArray(arr, 0, d - 1); 
        reverseArray(arr, d, n - 1); 
        reverseArray(arr, 0, n - 1); 
    } 
  
    static void reverseArray(int arr[], int start, int end) 
    { 
        int temp; 
        while (start < end) { 
            temp = arr[start]; 
            arr[start] = arr[end]; 
            arr[end] = temp; 
            start++; 
            end--; 
        } 
    } 
      public static void main(String[] args) 
    { 
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 }; 
        int n = arr.length; 
        int d = 2; 
  
        leftRotate(arr, d); // Rotate array by d 
    } 
} 
```

```js
// JavaScript implementation

const leftRotate = (arr, d, n) => {
    if (d == 0) {
        return;
    }
    d = (d % n);
    reverseArray(arr, 0, d - 1);
    reverseArray(arr, d, n -1);
    reverseArray(arr, 0 n - 1);
}

const reverseArray = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        start ++;
        end --;
    }
}

  
arr = array(1, 2, 3, 4, 5, 6, 7); 
n = sizeof(arr); 
d = 2; 
  
leftRotate(arr, d, n);  

```

```ts
// TypeScript implementation

const leftRotate = (arr: array, d: number, n: number): void => {
    if (d != 0) {
        d = (d % n);
        reverseArray(arr, 0, d - 1);
        reverseArray(arr, d, n -1);
        reverseArray(arr, 0 n - 1);
    }
}

const reverseArray = (arr: array, start: number, end: number): void => {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        start ++;
        end --;
    }
}

arr = array(1, 2, 3, 4, 5, 6, 7); 
n = sizeof(arr); 
d = 2; 
  
leftRotate(arr, d, n);  

```

```php
// PHP implementation

<?php
function leftRotate(&$arr, $d, $n) 
{ 
  
    if ($d == 0) 
        return; 
      // in case the rotating factor is 
      // greater than array length 
      $d = ($d % $n); 
    reverseArray($arr, 0, $d - 1); 
    reverseArray($arr, $d, $n - 1); 
    reverseArray($arr, 0, $n - 1); 
} 

function reverseArray(&$arr, $start, $end) 
{ 
    while ($start < $end) 
    { 
        $temp = $arr[$start]; 
        $arr[$start] = $arr[$end]; 
        $arr[$end] = $temp; 
        $start++; 
        $end--; 
    } 
} 
  
$arr = array(1, 2, 3, 4, 5, 6, 7); 
$n = sizeof($arr); 
$d = 2; 
  
leftRotate($arr, $d, $n);  
?> 
```

### **Block Swap**

```
Initialize A = arr[0..d-1] and B = arr[d..n-1]
1) Do following until size of A is equal to size of B

  a)  If A is shorter, divide B into Bl and Br such that Br is of same 
       length as A. Swap A and Br to change ABlBr into BrBlA. Now A
       is at its final place, so recur on pieces of B.  

   b)  If A is longer, divide A into Al and Ar such that Al is of same 
       length as B Swap Al and B to change AlArB into BArAl. Now B
       is at its final place, so recur on pieces of A.

2)  Finally when A and B are of equal size, block swap them.

```

Time Complexity: O(n)

TODO: Finish Block Swap on arrays.


## **Linked List**

## **Stack**

## **Queue**

## **Binary tTree**

## **Binary Search Tree**

## **Heap**

## **Hashing**

## **Graph**

## **Matrix**





 Search for the properties that arrays have in the following programming languages: Examples Ts, js, java, python, php, c#, go What built-in array methods exist in the following programming languages? : Examples in languages js, ts, java,  php, c#,  go, python

methods


## **Objects**
What is an object? Show a real life example to better understand this concept. What is an object? Show a real life example to better understand this concept. Find the built-in methods that objects have in Javascript and show an example of each one of them. What are object keys and object values? How can you create an object in the following languages? How can you create an object without the need to create a class previously in PHP? Show an example. What is dot notation in objects? Show practical examples about using dot notation with objects What is the hasOwnProperty method used for in Javascript? Show an example to better understand this method. What data types can you assign as values of objects in Javascript? Show an example of an object with the different data types assigned to it .How can you create an object in the following languages? Examples .What is the in operator of objects in Javascript? Show a practical example of using the in operator

What is the delete operator of objects in Javascript? Show an example
What is the difference between the in operator and the hasOwnProperty method in Javascript?

methods



## **Array vs Objects**
What is the difference between an array and an object in Javascript? When we should use each one.


## **Mutability and Immutability**
Explain the difference between mutability and immutability. Find an example of a mutable and an immutable data type in Javascript and show a practical example. What is mutability? Show an example to better understand this concept .Explain the difference between mutability and immutability
Find an example of a mutable and an immutable data type in Javascript and show a practical example


