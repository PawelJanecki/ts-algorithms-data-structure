/**
 * Transform first letter in each word to uppercase, keeping rest of each in lowercase.
 */

function titleCase(txt: string): string {
  const words = txt.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}

console.log(titleCase("the quick brown fox")); // Output: "The Quick Brown Fox"