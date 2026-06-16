/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (calBit(i) === k) {
      result += nums[i];
    }
  }

  return result;

  function calBit(num) {
    let result = 0;

    while (num > 0) {
      result += num & 1;

      num >>= 1;
    }

    return result;
  }
};
