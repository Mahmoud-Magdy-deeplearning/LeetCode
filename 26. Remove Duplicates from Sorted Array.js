/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      let k = i;
      while (k + 1 < nums.length && nums[k + 1] === nums[k]) k++;
      nums[j] = nums[i];
      i = k;
      j++;
    }
    return j;
  };
  nums = [1, 1, 2];
  console.log(removeDuplicates(nums));
  
  // Output: 2, nums = [1,2,_]
  