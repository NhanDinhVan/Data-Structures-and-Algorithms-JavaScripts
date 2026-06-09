/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (num of nums) {
    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }
  }

  return (max - min) * k;
};
