/**
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * Solution MUST have the O(N) complexity.
 *
 */

function sameFrequency(n1: number, n2: number) {
  const s1 = n1.toString();
  const s2 = n2.toString();

  if (s1.length !== s2.length) {
    return false;
  }
  let frequencyCounter1: any = {};
  let frequencyCounter2: any = {};
  for (let val of s1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of s2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

function test() {
  console.log('sameFrequency(182, 281): ', sameFrequency(182, 281)); // true
  console.log('sameFrequency(34, 14): ', sameFrequency(34, 14)); // false
  console.log(
    'sameFrequency(3589578, 5879385): ',
    sameFrequency(3589578, 5879385)
  ); // true
  console.log('sameFrequency(22, 222): ', sameFrequency(22, 222)); // false
}

test();