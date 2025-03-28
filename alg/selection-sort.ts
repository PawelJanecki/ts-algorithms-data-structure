/**
 * Selection sort algorythm.
 */

function selectionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i <= minIndex) {
      const lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}


console.log(selectionSort([10, 4, 3, 8, -10]));