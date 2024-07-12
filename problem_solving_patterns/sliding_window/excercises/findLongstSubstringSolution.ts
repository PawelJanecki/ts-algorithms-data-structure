/**
 * Write a function called findLongestSubstring, which accepts a string
 * and returns the length of the longest substring with all distinct characters.
 */

function findLongestSubstring(str: string) {
  let longest = 0;
  let seen: any = {};
  let start = 0;
  let end = 0;

  while (start < str.length && end <= str.length) {
    let char = str[end];
    if (!seen[char] && end < str.length) {
      seen[char] = 1;
      end++;
    } else {
      const seenLength = Object.keys(seen).length;
      longest = Math.max(longest, seenLength);
      start++;
      end = start;
      seen = {};
    }
  }
  return longest;
}

function findLongestSubstring2(str: string) {
  let longest = 0;
  let seen: any = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  console.log(seen);
  console.log(longest);
  return longest;
}

function testFindLongestSubstring2() {
  findLongestSubstring('') // 0
  findLongestSubstring2('rithmschool'); // 7
  findLongestSubstring('thisisawesome') // 6
  findLongestSubstring('thecatinthehat') // 7
  findLongestSubstring('bbbbbb') // 1
  findLongestSubstring('longestsubstring') // 8
  findLongestSubstring('thisishowwedoit') // 6
}

function testFindLongestSubstring() {
  findLongestSubstring('') // 0
  findLongestSubstring('rithmschool'); // 7
  findLongestSubstring('thisisawesome') // 6
  findLongestSubstring('thecatinthehat') // 7
  findLongestSubstring('bbbbbb') // 1
  findLongestSubstring('longestsubstring') // 8
  findLongestSubstring('thisishowwedoit') // 6
}

testFindLongestSubstring();
