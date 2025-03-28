/**
 * Write a function to present fibonacci sequence.
 */

function fibonacci(num: number): number[] {
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }

  return fib;
}

console.log(fibonacci(8))