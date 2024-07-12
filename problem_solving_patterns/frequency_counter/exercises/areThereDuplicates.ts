/**
 * Implement a function called, areThereDuplicates which accepts a variable
 * number of arguments, and checks whether there are any duplicates among
 * the arguments passed in.  You can solve this using the frequency counter
 * pattern OR the multiple pointers pattern.
 *
 * @param args variable number of arguments in same type: string or number
 */

function areThereDuplicates(...args: string[] | number[]) {
  if (args.length < 2) {
    return false;
  }
  let frequency: any = {};
  for (let val of args) {
    frequency[val] = (frequency[val] || 0) + 1;
    if (frequency[val] == 2) {
      return true;
    }
  }

  return false;
}

function areThereDuplicates2(...args: string[] | number[]) {
  if (args.length < 2) {
    return false;
  }
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicates3(...args: string[] | number[]) {
  return new Set([...args]).size !== arguments.length;
}

function test() {
  console.log('areThereDuplicates(1, 2, 3): ', areThereDuplicates(1, 2, 3)); // false
  console.log('areThereDuplicates(1, 2, 2): ', areThereDuplicates(1, 2, 2)); // true
  console.log(
    `areThereDuplicates('a', 'b', 'c', 'a'): `,
    areThereDuplicates('a', 'b', 'c', 'a')
  ); // true
}

test();
