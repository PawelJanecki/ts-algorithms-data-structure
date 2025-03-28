/**
 * Binary search
 */

function binarySearch(arr: number[], target: number): number {
  let left= 0;
  let right = arr.length - 1;

  while(left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = ++middle;
    } else {
      right = --middle;
    }
  }

  return -1;
}

console.log('index= ', binarySearch([0, 2, 3, 5, 6, 8, 9, 12, 19, 22, 35, 55, 61, 63, 70], 6));

