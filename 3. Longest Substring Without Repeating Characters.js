/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0,
    c = 0,
    j = 0,
    k = 0;
  for (let i = 0; i < s.length; i++) {
    k = i - 1;
    while (k >= j) {
      if (s[i] === s[k]) {
        longest = Math.max(longest, c);
        c -= k - j + 1;
        j = k + 1;
        break;
      }
      k--;
    }
    c++;
  }
  longest = Math.max(longest, c);
  return longest;
};

const s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));

// Output: 3
