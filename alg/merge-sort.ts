/**
 * Merge sort algorythm.
 */

function merge(left: number[], right: number[]) {
  let resultArr: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArr.push(left[leftIndex])
      leftIndex++
    } else {
      resultArr.push(right[rightIndex])
      rightIndex++;
    }
  }

  return resultArr.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  // Devide array into two halves.
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  console.log(left)
  console.log(right)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}


console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));