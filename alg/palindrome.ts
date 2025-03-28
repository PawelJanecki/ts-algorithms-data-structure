function isPalindrome(txt: string) {
  const clearTxt = txt.replace(/\s/g, '').toLowerCase();
  const reversedClearTxt = [...clearTxt].reverse().join('').toLowerCase();

  return clearTxt === reversedClearTxt;
}

function findTheLongestPalindrome(txt: string) {
  if (!txt.length) return 'Empty string!';
  if (txt.length === 1) return txt[0];

  let i = 0;
  let longestPalindrome = '';
  let arrOfPalindromes: string[] = [];

  // zapobieganie nadmiernemu sprawdzaniu jeśli już znaleziono najdłuższy możliwy palindrom.
  while (i < txt.length && i < txt.length - longestPalindrome.length) {
    for (let j = i + 2; j < txt.length; j++) {
      const txtToCheck = txt.slice(i, j);
      if (isPalindrome(txtToCheck)) {
        arrOfPalindromes.push(txtToCheck);
        if (txtToCheck.length > longestPalindrome.length) {
          longestPalindrome = txtToCheck;
        }
      }
    }
    i++;
  }
  console.log('all founded palindromes: ', arrOfPalindromes);

  return longestPalindrome;
}

function findPalindromes(txt: string) {
  const clearTxt = txt.replace(/\s+/g, ' ');
  const result: string[] = [];

  clearTxt.split(' ').forEach((e) => {
    if (isPalindrome(e)) result.push(e);
  });

  return result;
}

console.log('The longest palindrome: ', findTheLongestPalindrome('abcdcbbas'));
console.log(
  'Founded palindromes: ',
  findPalindromes(
    'Ala  ma kota, ale kot nie ma Ali.   Ten kot   ma na imię    Kajak'
  )
);
