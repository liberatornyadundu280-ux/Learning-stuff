// using the updated method to export function
export function add(a, b) {
  return a + b;
}
export const weird = () => console.log("this is good man ");

// using the old method "CommonJS" to export
module.exports = { weird, add };
