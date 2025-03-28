/**
 * Find the missing number.
 * Given an array arr[] of size n-1 with integers in the range of [1, n],
 * the task is to find the missing number from the first n integers.
 */

let arr1 = [1, 2, 4, 6, 3, 7, 8];
let arr2 = [1, 2, 3, 5];

function findMissinNumber(arr: number[]) {
  const n = arr.length + 1;
  let freq: any = {};

  for (let i = 1; i <= n; i++) {
    freq[i] = 0;
  }

  arr.forEach(e => {
    freq[e] = 1;
  })

  return Object.keys(freq).find(e => freq[e] === 0);

  // console.log(freq)
}

console.log(findMissinNumber(arr1))
console.log(findMissinNumber(arr2))

