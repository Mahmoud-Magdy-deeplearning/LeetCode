/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let a = 0,
    b = s.length - 1;
  while (a < b) {
    [s[a], s[b]] = [s[b], s[a]];
    a++;
    b--;
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));

// Output: ["o","l","l","e","h"]
