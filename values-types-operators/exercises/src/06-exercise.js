/**
 * Write a program that stores in the variable result:
 *
 * When x and y are undefined:
 * result = 'error'
 *
 * When x is smaller than y:
 * result = 'smaller'
 *
 * When x is greater than y:
 * result = 'larger'
 *
 * When x is equal to y:
 * result = 'equal'
 *
 * NOTE: You will have to use 'if' or 'else if' statements
 * to compare the values of the x and y variables
 * using the JavaScript conditional operators: && or ||
 *
 * @example
 * if (a > b && b !== 5) {
 * // first condition
 * } else if (a > b && b === 5) {
 * // other condition
 * }
 */

/* === PERSONAL IMPROVEMENT ===
In therms of performance it's better to return values at the end of each case doing so the execution
stops at the first return. */

function compareValues(x, y) {

  // Add your code here
  if (!x || !y) {

    return `error: status of X is: ${x} and status of Y is: ${y}. Check parameters`;
  } else if (x < y) {

    return `${x} is smaller than ${y}`;
  } else if (x > y) {

    return `${x} is larger than ${y}`;
  } else if (x === y) {

    return `${x} is equal than ${y}`;
  }
}

export default compareValues;
