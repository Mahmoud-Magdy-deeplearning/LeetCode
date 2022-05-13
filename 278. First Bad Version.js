/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

//isBadVersion Mock
const isBadVersion = x => {
    if(x===4||x===5)
    return true
    else return false
  };
  
  var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
      let low = 0;
      let high = n;
      let current = 0;
      let firstBad = current;
      while (low <= high) {
        current = Math.floor((low + high) / 2);
        if (isBadVersion(current)) {
          high = current - 1;
          firstBad = current;
        } else low = current + 1;
      }
      return firstBad;
    };
  };
  const sol = solution(isBadVersion);
  console.log(sol(9));
  // Output: 4
  