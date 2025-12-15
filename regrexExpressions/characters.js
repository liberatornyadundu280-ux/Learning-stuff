const regex = /\d/; // this is used to map all the digits ie 0->9
const regrexWords = /\w/; // this is used for small letters------>/\W/ for capitals also removes underscore "_"
const regrexalphanume = /[a-zA-Z0-9]/; // if you want to map the hyphane u use /[-a-zA-Z0-9]/
const regexAll = /a./; // this will remove all the characters except the line brakes]
const space = /\s+/; // this is used to remove multiple spaces making the spacing uniform
/* there are multiple more wild cards charaters in JS but i listed the one i will be working with mostly 
as time goes one  will be adding more to the library as i see fit*/
