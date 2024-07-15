function swap(arr: number[], idx1: number, idx2: number) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr: number[]) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

function bubbleSortOptimized(arr: number[]) {
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

function testBubbleSort() {
  const t1 = new Date().getTime();
  console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
  const t2 = new Date().getTime();
  console.log(t2 - t1);
}

function testBubbleSortOptimized() {
  const t1 = new Date().getTime();
  console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]));
  const t2 = new Date().getTime();
  console.log(t2 - t1);
}

testBubbleSort();
testBubbleSortOptimized();
