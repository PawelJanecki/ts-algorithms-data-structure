/**
 * Write a function called sumZero whicj accepts a soerted array of integers. The function should find the first pair
 * where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

/**
 * Wrong solution because of time complexity - O(n^2)
 */
function sumZeroWrongSolution(arr: number[]) {
  for (let i in arr) {
    for (let j = +i + 1; j < arr.length; j++) {
      if (arr[+i] + arr[j] === 0) {
        return [arr[+i], arr[j]];
      }
    }
  }
}

function sumZero(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
