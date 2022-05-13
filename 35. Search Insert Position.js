/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let current = 0;
    while (low <= high) {
      current = Math.floor((low + high) / 2);
      if (nums[current] === target) return current;
      else if (nums[current] > target) high = current - 1;
      else low = current + 1;
    }
    if (nums[current] < target) return current + 1;
    else if (current === 0) return 0;
    else return current;
  };
  
const nums = [1, 3];
const target = 2;
console.log(searchInsert(nums, target));
//Output: 1