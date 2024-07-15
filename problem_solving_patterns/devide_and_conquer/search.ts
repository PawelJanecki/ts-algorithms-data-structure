/**
 * Write a function called search which accepts a sorted array of numbers and number.
 * Function should return an index of searching element if will be founded or -1 otherwise.
 */

function search(arr: number[], n: number) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < n) {
      min = middle + 1;
    } else if (arr[middle] > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}