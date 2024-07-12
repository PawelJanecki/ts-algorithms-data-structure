/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase or name formd by rearranging the letters of another, such as cinema, formed from iceman.
 * 
 * 
 * We can consider only word with small letters and without spaces.
 */

function validAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqStr1: any = {};
  let freqStr2: any = {};

  for (let e in [...str1]) {
    freqStr1[str1[e]] = (freqStr1[str1[e]] || 0) + 1;
  }
  for (let e in [...str2]) {
    freqStr2[str2[e]] = (freqStr2[str2[e]] || 0) + 1;
  }

  if (Object.keys(freqStr1).length !== Object.keys(freqStr2).length) {
    return false;
  }

  for (let key in freqStr1) {
    if (!(key in freqStr2)) {
      return false;
    }
    if (freqStr1[key] !== freqStr2[key]) {
      return false;
    }

  }

  return true;
}

console.log(`result of '' and '': ${validAnagram('', '')}`);
console.log(`result of 'aaz' and 'zza': ${validAnagram('aaz', 'zza')}`);
console.log(`result of 'anagram' and 'nagaram': ${validAnagram('anagram', 'nagaram')}`);
console.log(`result of 'rat' and 'car': ${validAnagram('rat', 'car')}`);
console.log(`result of 'awesome' and 'awesom': ${validAnagram('awesome', 'awesom')}`);
console.log(`result of 'qwerty' and 'qeywrt': ${validAnagram('qwerty', 'qeywrt')}`);
console.log(
  `result of 'texttwisttime' and 'timetwisttext': ${validAnagram('texttwisttime', 'timetwisttext')}`
);
