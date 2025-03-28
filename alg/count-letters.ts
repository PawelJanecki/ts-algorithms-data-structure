/**
 * Count the letters in given word.
 */

function countCharacters(txt: string) {
  let result: {[key: string]: number} = {};
  [...txt].forEach(e => {
    result[e] = (result[e] || 0) + 1;
  })
  return result;
}

console.log(countCharacters("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
