/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      k = i;
      break;
    }
  }

  const sortedNums = [...nums.slice(k), ...nums.slice(0, k)];

  return binarySearch(sortedNums, 0, nums.length - 1, target);

  function binarySearch(nums, l, r, target) {
    if (l > r) return false;

    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] > target) {
      return binarySearch(nums, l, mid - 1, target);
    }

    return binarySearch(nums, mid + 1, r, target);
  }
};
