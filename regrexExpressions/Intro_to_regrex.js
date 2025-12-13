/*
 used to make some opperations on string
 */

let regrex = /nigga/; // this is the declaration of a regrex expression
// testing regrex expresion
let test = regrex.test("i am a nigga ");
console.log(test); // this will output true because the passed string contain the regrex expression
// but this one will print fase coz the string does not conatin the regrex expression
console.log(regrex.test("ngga"));

// understaing the match property which will return an array with properties showing the index of matching
let match = "nigga why are you gay".match(regrex);
console.log(match); // which will out put an object with properties

// using the replace method to replace unwanted data to the required for example
let replace = "i am a nigga".replace(regrex, "NIGGA");
console.log(replace); // printing the desired out nigga

// making a regrex expresion case insansetive uisng the ignore carater ie "i"
const regrex_case = /nigga/i;
// now it will print true for this one
console.log(`NIGGA TESTING  ${regrex_case.test("NIGGA")}`);

// using the anchors
//   the ^ anchor-----> start
//  the $ anchor-------->end index
const start = /^freecodecamp/i;
const end = /freecodecamp$/i;
console.log(start.test("freecodecamp")); // true
console.log(end.test("freecodecamp")); // true
console.log(start.test("freecodecamp is great")); // true
console.log(end.test("freecodecamp is great")); // false
console.log(start.test("i love freecodecamp")); // false
console.log(end.test("i love freecodecamp")); // true
console.log(start.test("have met freecodecamp's founder")); // false
console.log(end.test("have met freecodecamp's founder")); // false

// the multiline character in regrex  ----> m
const start2 = /^freecodecamp/im;
const end2 = /freecodecamp$/im;
const string = `I really love
freecodecamp
it's my favorite`;
console.log(start2.test(string)); // true
console.log(end2.test(string)); // true

// the d flag -----> give more info in the match array like
const regex2 = /freecodecamp/di;
const string2 = "we love freecodecamp isn't freecodecamp great?";
console.log(string2.match(regex2));
const regex = /🍎/u;

// the u flag is used to mtch unicide characters
const str = "I have an apple 🍎";
console.log(regex.test(str)); // true
