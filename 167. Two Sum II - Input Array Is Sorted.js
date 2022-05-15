/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
  let a = 0,
    b = numbers.length - 1;
  while (a < b) {
    if (numbers[a] + numbers[b] === target) return [a + 1, b + 1];
    else if (numbers[a] + numbers[b] > target) b--;
    else a++;
  }
};
let nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));

// Output: [1,2]
