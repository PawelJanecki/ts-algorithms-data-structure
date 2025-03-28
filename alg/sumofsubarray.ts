/**
 * Find a subarray with parameterized length and the highest sum of an elements.
 */

let arr1 = [2, 3, -8, 7, -1, 2, 3];
let arr2 = [-2, -4];
let arr3 = [5, 4, 1, 7, 8];

function getSumOfArr(arr: number[]) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

function maxSubArraySum1(arr: number[], subArrayLength: number): number {
  if (arr.length < subArrayLength) return getSumOfArr(arr);
  let result = 0;

  for (let i = 0; i <= arr.length - subArrayLength; i++) {
    const sumOfSubArray = getSumOfArr(arr.slice(i, i + subArrayLength));
    if (sumOfSubArray > result) {
      result = sumOfSubArray;
    }
  }

  return result;
}

// console.log(maxSubArraySum1(arr1, 2));

/**
 * Find a subarray with the highest sum.
 */
function maxSubArraySum2(arr: number[]) {
  let result = arr[0];
  let maxSum = arr[0];
  let resultArr: number[] = [];

  for (let i = 0; i < arr.length - resultArr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const sumOfSubArray = getSumOfArr(arr.slice(i, j));
      if (sumOfSubArray > maxSum) {
        maxSum = sumOfSubArray;
        resultArr = arr.slice(i, j)
      }
    }
  }

  console.log('result arr: ', resultArr)
  return maxSum;
}

console.log(maxSubArraySum2(arr1))