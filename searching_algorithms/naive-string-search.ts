/**
 * Method returns number of repetition the second string in the first one.
 * @param str1 string
 * @param str2 string
 * @returns number of repetitions
 */
function naiveSearch(str1: string, str2: string) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i + j]) break;
      if (j === str2.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lo'));