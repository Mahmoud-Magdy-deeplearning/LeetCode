/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
    let j = 0;
    let flag = true;
    let squareList = [];
    for (let i = 1; i < nums.length; i++) {
      if (flag && nums[i] >= 0) {
        flag = false;
        i--;
      } else if (flag) j++;
      else if (!flag && j >= 0) {
        if (Math.abs(nums[j]) < Math.abs(nums[i])) {
          squareList.push(Math.pow(nums[j], 2));
          i--;
          j--;
        } else {
          squareList.push(Math.pow(nums[i], 2));
        }
      } else squareList.push(Math.pow(nums[i], 2));
    }
    while (j >= 0) {
      squareList.push(Math.pow(nums[j],2));
      j--;
    }
    return squareList;
  };
  
  const nums = [-7, -3, 2, 3, 11];
  console.log(sortedSquares(nums));
  
  // Output: [0,1,9,16,100]
  