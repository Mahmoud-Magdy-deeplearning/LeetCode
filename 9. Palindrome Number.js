/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const number = x.toString();
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== number[number.length - 1 - i]) return false;
    if (i === number.length - i - 1) break;
  }
  return true;
};

const x = 121;
console.log(isPalindrome(x));
// Output = true
