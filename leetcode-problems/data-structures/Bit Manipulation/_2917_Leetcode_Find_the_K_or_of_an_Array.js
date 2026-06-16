/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
  const bits = new Array(32).fill(0);
  let result = 0;

  for (let num of nums) {
    fillBit(bits, num);
  }

  for (let i = 0; i < bits.length; i++) {
    if (bits[i] >= k) {
      result += Math.pow(2, i);
    }
  }

  return result;

  function fillBit(bits, num) {
    let currentIndex = 0;

    while (num > 0) {
      bits[currentIndex] += num & 1;

      num >>= 1;
      currentIndex++;
    }
  }
};
