const regex = /free(code)camp/i;
console.log(regex.test("freecodecamp")); // true
/*
const regex = /free(co+de)camp/i;
console.log("freecoooooooodecamp".replace(regex, "paidcodeworld"));

const regex = /free(co+de)camp.*free\1camp/i;
console.log(regex.test("freecooooodecamp is great i love freecooooodecamp")); // true
console.log(regex.test("freecooooodecamp is great i love freecodecamp")); // false

To define a named capture group, 
you add a question mark (?) followed by the name enclosed in less than and greater than signs to the beginning of the group.
 Let's name our capture group code:
const regex = /free(?<code>co+de)camp.*free\1camp/i;
const regex = /free(?<code>co+de)camp.*free\k<code>camp/i;
console.log(regex.test("freecooooodecamp is freecooooodecamp")); // true
*/
