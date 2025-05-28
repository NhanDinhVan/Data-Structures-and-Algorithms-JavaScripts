/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    const n = nums.length;
    if (n === 0) return 0;

    const length = new Array(n).fill(1);
    const count = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (length[j] + 1 > length[i]) {
                    length[i] = length[j] + 1;
                    count[i] = count[j];
                } else if (length[j] + 1 === length[i]) {
                    count[i] += count[j];
                }
            }
        }
    }

    const maxLen = Math.max(...length);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (length[i] === maxLen) {
            ans += count[i];
        }
    }
    return ans;
};
