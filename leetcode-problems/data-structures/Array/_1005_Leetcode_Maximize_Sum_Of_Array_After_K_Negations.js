/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  while (k > 0) {
    let minIndex = 0;

    nums.map((num, i) => {
      if (nums[i] < nums[minIndex]) {
        minIndex = i;
      }
    });

    nums[minIndex] = -nums[minIndex];
    k--;
  }

  return nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
};
