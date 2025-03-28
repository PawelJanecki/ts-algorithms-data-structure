/**
 * Quick sort algorythm.
 */

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort([38, 27, 43, 3, 9, 82, 10]));