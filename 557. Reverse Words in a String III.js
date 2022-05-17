/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let a = s.split(" ");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i].split("").reverse().join(""));
  }
  return b.join(" ");
};
let s = "Let's take LeetCode contest";
console.log(reverseWords(s));

// Output: "s'teL ekat edoCteeL tsetnoc"
