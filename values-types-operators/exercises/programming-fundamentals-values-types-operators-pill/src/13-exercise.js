/**
 * Store in the variable 'result' the value 'pear' from the array 'fruits'.
 *
 * IMPORTANT:
 * You will have to store the value by accesing
 * the exact position in the array,
 *
 * not by copying the value.
 */
function getValueInArray() {
  let fruits = [
    "orange",
    "pineapple",
    "olives",
    "pear",
    "prunes",
    "peaches",
    "apple"
  ];
  let result;

  // Add your code here

  result = fruits[fruits.indexOf('pear')]; // I decide this as the position of pearcould change in the future.

  // Don’t change this code
  return result;
}

export default getValueInArray;
