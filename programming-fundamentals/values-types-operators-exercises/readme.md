# values-types-operators | Exercises explained

## Introduction
This exercises are made with **npm** and **unit testing**. Before starting make sure you have **node** installed on your machine. If not you can [install node here](https://nodejs.org/en/).

## Prepare the environment:
First of all run `npm i` on the same folder as the `package.json` file. You will see several files and folders are created like the `node_modules` folder or the `package-lock.json`. Check this page to learn more about [npm official documentation](https://docs.npmjs.com/).

## Folder Structure
```
exercises
├─── README.md
├─── package.json
├─── ...
├─── src
│   ├─── 01.exercise.js
│   ├─── 02.exercise.js
│   ├─── ...
│   └── __tests__
│       ├─── 01.exercise.test.js
│       ├─── 02.exercise.js
│       └─── ...
└── index.html
```

## How to run tests
On this case we are using [jest](https://jestjs.io/) for the **unit testing**. 
From `/exercises` we can run `npm run test` to run all the 17 tests. 
We can run individual tests too by executing for example `npm run test src/__tests__/01-exercise.test.js`.

If the test pass you will see something like:

```bash
 PASS  src/__tests__/01-exercise.test.js
  ✓ exercise 1: create a variable with the value 'hello-world' (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.905 s, estimated 1 s
```  

otherwise if the test fails the output will be something like:

```bash
 FAIL  src/__tests__/01-exercise.test.js
  ✕ exercise 1: create a variable with the value 'hello-world' (12 ms)

  ● exercise 1: create a variable with the value 'hello-world'

    expect(received).not.toThrow()

    Error name:    "ReferenceError"
    Error message: "myVar is not defined"

          10 | 
          11 |   // Don’t change this code
        > 12 |   return myVar;
             |   ^
          13 | }
          14 | 
          15 | export default makeVar;

          at makeVar (src/01-exercise.js:12:3)
          at src/__tests__/01-exercise.test.js:5:5
          at Object.<anonymous> (node_modules/expect/build/toThrowMatchers.js:84:11)
          at Object.toThrow (node_modules/expect/build/index.js:338:21)
          at Object.<anonymous> (src/__tests__/01-exercise.test.js:6:10)

      4 |   expect(() => {
      5 |     makeVar();
    > 6 |   }).not.toThrow();
        |          ^
      7 | 
      8 |   expect(makeVar()).toMatch(/hello-world/i);
      9 | });

      at Object.<anonymous> (src/__tests__/01-exercise.test.js:6:10)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.51 s
```

Now you can know if you are doing the exercises right or not by using **unit testing** !

## Exercises explained

### Exercise 1
[Exercise](/values-types-operators/exercises/src/01-exercise.js) The goal is to know how to store information inside variables. The string `'hello-world'` on this case.

[Test](/values-types-operators/exercises/src/__tests__/01-exercise.test.js) From the exercise we import the `makeVar` variable created in the `01-exercise.js` so we can properly in a functional way of the value match the pattern `/hello-world/`.

### Exercise 2
[Exercise](/values-types-operators/exercises/src/02-exercise.js) The goal is to store a number inside a variable.

[Test](/values-types-operators/exercises/src/__tests__/02-exercise.test.js) From the exercise we import the `makeNumber` variable created in the `02-exercise.js` and we check by using `.toEqual(expect.any(Number)` if the value is a number.

### Exercise 3
[Exercise](/values-types-operators/exercises/src/03-exercise.js) The goal is to create different variables to store different types and return a dictionary with all the variables.

[Test](/src/__tests__/03-exercise.test.js) From the test we import the `variableTypes` created in the `03-exercise.js` and we check one by one all the variables to make sure they are set as we expect.

### Exercise 4
[Exercise](/values-types-operators/exercises/src/04-exercise.js) The goal is to create different variables to store `null` and `undefined` values.

[Test](/src/__tests__/04-exercise.test.js) From the test we import the `makeNullUndefinedVariables` created in the `04-exercise.js`. We use `.toBeNull()` and  `.toBeUndefined()` build-in methods to check this special values. 

### Exercise 5
[Exercise](/values-types-operators/exercises/src/05-exercise.js) The goal is to create  and export different functions which each one triggers a `console.log` with different values.

[Test](/values-types-operators/exercises/src/__tests__/05-exercise.test.js) From the test we import the all the different functions.
```js
import {
  learnConsoleLog,
  stringTypeofTest,
  numberTypeofTest,
  boolTypeofTest,
  undefinedTypeofTest,
  nullTypeofTest,
  arrTypeofTest
} from "../05-exercise";
```

We create a spy of the `console.log` before running each test.
```js
beforeAll(() => {
  logSpy = jest.spyOn(console, "log").mockImplementation();
});
```

And after the single test runs we reset the value of the spy
```js
afterEach(() => {
  console.log.mockReset();
});
```

On each test we use the  `.toHaveBeenCalledWith()` build in jest function to test the values we pass to the target function.

### Exercise 6
[Exercise](/values-types-operators/exercises/src/06-exercise.js) The goal is to return different messages depending on the values of the given parameters `x` and `y`. I decided to go for a if return approach so the function execution finish when the first return triggers. 
```js
  if (!x || !y) {

    return `error: status of X is: ${x} and status of Y is: ${y}. Check parameters`;
  } else if (x < y) {

    return `${x} is smaller than ${y}`;
  } else if (x > y) {

    return `${x} is larger than ${y}`;
  } else if (x === y) {

    return `${x} is equal than ${y}`;
  }
```
That way we avoid running each case and improve performance.

[Test](/values-types-operators/exercises/src/__tests__/06-exercise.test.js) On the test side we run our function giving it different parameters 
```js
test("exercise 6: save the value 'error' in the variable 'result' when x and y are undefined", () => {
  expect(compareValues()).toMatch(/error/i);
});

test("exercise 6: save the value 'smaller' in the variable 'result' when x is smaller than y", () => {
  expect(compareValues(1, 5)).toMatch(/smaller/i);
});
```
so we can mock and make sure all the if returns triggers as expected.

### Exercise 6
[Exercise](/values-types-operators/exercises/src/04-exercise.js) The goal is to create different variables to store `null` and `undefined` values.

[Test](/values-types-operators/exercises/src/__tests__/04-exercise.test.js) From the test we import the `makeNullUndefinedVariables` created in the `04-exercise.js`. We use `.toBeNull()` and  `.toBeUndefined()` build-in methods to check this special values. 

### Exercise 7, 8, 9, 10, 11
[Exercise 7](/values-types-operators/exercises/src/07-exercise.js) | [Exercise 8](/values-types-operators/exercises/src/08-exercise.js) | [Exercise 9](/values-types-operators/exercises/src/09-exercise.js) | [Exercise 10](/values-types-operators/exercises/src/10-exercise.js) | [Exercise 11](/values-types-operators/exercises/src/11-exercise.js). The goal is to play with different math operators like addition `+`, subtraction `-`, multiplication `*`, division `/` and modules `%`.

[Test 7](/values-types-operators/exercises/src/__tests__/07-exercise.test.js) | [Test 8](/values-types-operators/exercises/src/__tests__/08-exercise.test.js) | [Test 9](/values-types-operators/exercises/src/__tests__/09-exercise.test.js) | [Test 10](/values-types-operators/exercises/src/__tests__/10-exercise.test.js) | [Test 11](/values-types-operators/exercises/src/__tests__/11-exercise.test.js) On the test side we are just using a `.toBe()` to check actual value is what we expect.

### Exercise 12
[Exercise](/values-types-operators/exercises/src/12-exercise.js) The goal is to create an array with all the weekdays.

[Test](/src/__tests__/12-exercise.test.js) By using `.toMatchObject()` we want to make sure the array we are testing is exactly the same we expect.

### Exercise 13
[Exercise](/values-types-operators/exercises/src/13-exercise.js) The goal is to access one value inside a given array and store it. As the position of the `pear` value could change I used `fruits[fruits.indexOf('pear')]` to make sure I was accessing the right index. 

[Test](/values-types-operators/exercises/src/__tests__/13-exercise.test.js) On the test  side we are just making sure the value  we  got is `pear`.

### Exercise 14
[Exercise](/values-types-operators/exercises/src/14-exercise.js) By using the javascript Array build in property `.length` we want to know how long our given array is.

[Test](/values-types-operators/exercises/src/__tests__/14-exercise.test.js) On the test side we are just making sure the value we  got is correct length of the array.

### Exercise 15
[Exercise](/values-types-operators/exercises/src/15-exercise.js) The goal is to replace the 3rd position of a  given array with the string `'kiwi'`. This was my solution but probably it can we done in several ways:
```js
  array[3] = 'kiwi';
```

[Test](/values-types-operators/exercises/src/__tests__/15-exercise.test.js) On the test we mock the 3rd position of the returned array and check if the value is what we expect.

### Exercise 16, 17
[Exercise 16](/values-types-operators/exercises/src/16-exercise.js) | [Exercise 17](/values-types-operators/exercises/src/17-exercise.js) The goal is to return the wanted string by accessing 2d and multi-d arrays.

[Test 16](/values-types-operators/exercises/src/__tests__/16-exercise.test.js) | [Test 17](/values-types-operators/exercises/src/__tests__/17-exercise.test.js) On the test side we are just testing if the output is the expected one.

## Conclusion
This exercises were perfect to put in practice some coding fundamentals and more important start to really understand how **unit testing** works.

[Dive-in matchers](https://jestjs.io/docs/en/using-matchers)
