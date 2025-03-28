/**
 * Find the longest word in a given sentese.
 */

function findLongestWord(txt: string): string {
  return txt.split(' ').reduce((p, c) => {
    if (p.length > c.length) return p;
    if (c.length > p.length) return c;
    return p;
  }, '')
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "quick"