/**
 * Write a function to calculate factorial of given number.
 */

function fac(num: number): number {
  if (num == 0 || num == 1) return 1;
  return num * fac(num - 1);
}

console.log(fac(5))