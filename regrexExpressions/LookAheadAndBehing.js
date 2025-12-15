// we use ?=next_word to look ahead
const regex = /free(?=code)/i;
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("free code camp")); // false
console.log(regex.test("I need someone for free to write code for me")); // false

// if you want to map if the expresion does not follow the word we use ?!nextword
const notRegex = /free(?!code)/i;
console.log(notRegex.test("freeCodeCamp")); // false
console.log(notRegex.test("free code camp")); // true
console.log(notRegex.test("I need someone for free to write code for me"));

// A positive lookbehind is denoted with ?<= instead of ?=.
// const regex = /(?<=free)code/i;
// Just like with our positive lookahead, our positive lookbehind matches the first string because code is immediately preceded by free:

const Pregex = /(?<=free)code/i;
console.log(Pregex.test("freeCodeCamp")); // true
console.log(Pregex.test("free code camp")); // false
console.log(Pregex.test("I need someone for free to write code for me")); // false

// To match code when it is NOT preceded by free, we can use a negative lookbehind. A negative lookbehind is defined by replacing ?<= with ?<!:

// const regex = /(?<!free)code/i;
// This would match any occurrence of code that is NOT immediately preceded by free:

const npregex = /(?<!free)code/i;
console.log(npregex.test("freeCodeCamp")); // false
console.log(npregex.test("free code camp")); // true
console.log(npregex.test("I need someone for free to write code for me")); // true
