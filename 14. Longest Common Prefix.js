/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
  let longestString = "";
  let stringLimit = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let flag = 1;
    for (let j = 0; j < strs.length - 1; j++) {
      if (i >= strs[j].length || i >= strs[j + 1].length) {
        stringLimit = 1;
        break;
      }
      if (strs[j][i] !== strs[j + 1][i]) {
        flag = 0;
        break;
      }
    }
    if (stringLimit) break;

    if (flag) longestString += strs[0][i];
    else break;
  }
  return longestString;
};
strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
// Output: "fl"
