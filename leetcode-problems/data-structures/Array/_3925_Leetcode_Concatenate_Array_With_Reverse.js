/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
  const ans = new Array(2 * nums.length).fill(0);

  nums.map((num, index) => {
    ans[index] = num;
    ans[ans.length - index - 1] = num;
  });

  return ans;
};
