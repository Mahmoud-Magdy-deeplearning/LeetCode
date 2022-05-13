/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let current = Math.floor((low + high) / 2);
    if (nums[current] === target) return current;
    else if (nums[current] > target) high = current - 1;
    else low = current + 1;
  }
  return -1;
};
const nums = [-1, 2, 3, 5, 9, 12];
const target = 2;
console.log(search(nums, target));
// Output: 4
