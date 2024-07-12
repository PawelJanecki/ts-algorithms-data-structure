/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 */


/**
 * Wrong solution because of O(n^2) complexity.
 */
function wrongSolution(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const e of arr1) {
    let correctIndex = arr2.indexOf(e ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

/**
 * Correct solution - O(n) complexity.
 */
function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1: any = {};
  let frequencyCounter2: any = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(((+key) ** 2) in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[(+key) ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log('result from wrong sol: ', wrongSolution([1, 2, 3, 2], [9, 1, 4, 4]));
console.log('result from correct sol: ', same([1, 2, 3, 2], [9, 1, 4, 4]));