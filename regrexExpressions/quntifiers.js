/*
* we have the following
--> *---->sekects all from 0
--> +---> selects all from 1 character
--> {startValue,last value} used when we are removing a certain perturn a number of times
--> ^---> symbolizes the start of the expression
--> $---> symbolizes the end of the string
--> ?---> used when you're using one character
 */

// const regex = /^\d{4}$/;
// Notice how our quantifier contains only the number 4. This syntax means "match the previous character exactly four times". Let's see how that behaves:

const regex = /^\d{4}$/;
console.log(regex.test("123")); // false
console.log(regex.test("1234")); // true
console.log(regex.test("12345")); // false
console.log(regex.test("123456")); // false
console.log(regex.test("1234567")); // false

const rege = /^[a-zA-Z]?\d{4,6}$/;
console.log(rege.test("123")); // false
console.log(rege.test("a1234")); // true
console.log(rege.test("12345")); // true
console.log(rege.test("az12345")); // false
console.log(rege.test("X123456")); // true
console.log(rege.test("1234567")); // false
/*
const regex = /^[a-zA-Z]*\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("a1234")); // true
console.log(regex.test("12345")); // true
console.log(regex.test("az12345")); // true
console.log(regex.test("X123456")); // true
console.log(regex.test("1234567")); // false

const regex = /^[a-zA-Z]+\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("a1234")); // true
console.log(regex.test("12345")); // false
console.log(regex.test("az12345")); // true
console.log(regex.test("X123456")); // true
console.log(regex.test("1234567")); // false

*/
