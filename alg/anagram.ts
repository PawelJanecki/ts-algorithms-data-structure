/**
 * Check whether given words are anagrams.
 */

function getCharsFrequency(txt: string) {
  let result: { [key: string]: number } = {};
  [...txt].forEach(e => {
    result[e] = (result[e] || 0) + 1;
  })

  return result;
}

function isAnagram(txt1: string, txt2: string): boolean {
  let obj1 = getCharsFrequency(txt1);
  let obj2 = getCharsFrequency(txt2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in Object.keys(obj2)) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true
}

console.log('is anagrams: ', isAnagram('kajak', 'jakak'))