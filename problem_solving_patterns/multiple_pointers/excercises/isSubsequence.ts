/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first
 * string form a subsequence of the characters in the second string. In other words, the function should check whether
 * the characters in the first string appear somewhere in the second string, without their order changing.
 */


/**
 * Method check either first string is substring of second one.
 * 
 * @param str1 string
 * @param str2 string
 * @returns true or false
 */
function isSubsequence2(str1: string, str2: string) {
  if (str1.length > str2.length) {
    return false;
  }

  let i = 0;
  let j = 0;
  let temp = 0;

  while (j < str2.length - str1.length) {
    if (str1[i] === str2[j] && i === str1.length - 1) {
      return true;
    } else if (str1[i] === str2[j]) {
      i++;
      j++;
      if (temp === 0) {
        temp = j;
      }
    } else {
      i = 0;
      j = temp + 1;
      // j++
    }
  }

  return false;
}

function isSubsequence(str1: string, str2: string) {
  if (str1.length > str2.length) {
    return false;
  }

  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
    if (i = str1.length) {
      return true;
    }
  }
  return false;
}

function test() {
  console.log(`isSubsequence('hello', 'hello world'): `, isSubsequence('hello', 'hello world')); // true
  console.log(`isSubsequence('sing', 'sting'): `, isSubsequence('sing', 'sting')); // true
  console.log(`isSubsequence('abc', 'abracadabra'): `, isSubsequence('abc', 'abracadabra')); // true
  console.log(`isSubsequence('abc', 'acb'): `, isSubsequence('abc', 'acb')); // false (order matters)
}

function test2() {
  console.log(`isSubsequence2('hello', 'hello world'): `, isSubsequence2('hello', 'hello world')); // true
  console.log(`isSubsequence2('sing', 'sting'): `, isSubsequence2('sing', 'sting')); // true
  console.log(`isSubsequence2('abc', 'abracadabra'): `, isSubsequence2('abc', 'abracadabra')); // true
  console.log(`isSubsequence2('abc', 'acb'): `, isSubsequence2('abc', 'acb')); // false (order matters)
}

test();