/**
 * Binary searching the value in a given array.
 * @param arr sorted array of values
 * @param value searching value
 * @returns index of given value in the array, -1 otherwise.
 */
function binarySearch(arr: number[], value: number): number {
  let left = 0;
  let right = arr.length - 1;
  let pointer = 0;

  while (left <= right) {
    pointer = Math.floor((left + right) / 2);
    if (arr[pointer] === value) {
      return pointer;
    } else if (arr[pointer] < value) {
      left = pointer + 1;
    } else {
      right = pointer - 1;
    }
  }

  return -1;
}

function testBinarySearch() {
  console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
  console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
  console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
  console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
  console.log(
    binarySearch(
      [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
      ],
      10
    )
  ); // 2
  console.log(
    binarySearch(
      [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
      ],
      95
    )
  ); // 16
  console.log(
    binarySearch(
      [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
      ],
      100
    )
  ); // -1
}

testBinarySearch();