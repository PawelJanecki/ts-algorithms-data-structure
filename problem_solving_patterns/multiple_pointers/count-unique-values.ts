/**
 * Implement a function called countUniqueValues, which acceots a sorted array, and counts the unique values
 * in the array. There can be negative numbers in the array, but it will always be sorted.
 */

function countUniqueValues(arr: number[]) {
  if (arr.length === 0 || arr.length < 2) {
    return 0;
  }
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[j] > arr[i]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
