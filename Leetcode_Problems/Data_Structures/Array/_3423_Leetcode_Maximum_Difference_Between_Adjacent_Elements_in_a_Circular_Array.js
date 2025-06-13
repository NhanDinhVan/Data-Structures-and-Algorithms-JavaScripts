/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let max = 0;
    nums.map(function (x, i) {
        max = Math.max(max, Math.abs(x - nums[(i + 1) % nums.length]));
    })
    return max;
};