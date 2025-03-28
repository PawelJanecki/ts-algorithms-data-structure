/**
 * Bubble sort algorythm.
 */

function bubbleSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {

        // swap
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}


console.log(bubbleSort([10, 4, 3, 8]));