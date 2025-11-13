const url = require("url");
const address =
  "https://www.coursera.org/programs/all/aditya-university?currentTab=HOME";
const parsedurl = url.parse(address, true);
console.log("host:", parsedurl.host);
console.log("pathname:", parsedurl.pathname);
console.log("query paramaters:", parsedurl.query);
