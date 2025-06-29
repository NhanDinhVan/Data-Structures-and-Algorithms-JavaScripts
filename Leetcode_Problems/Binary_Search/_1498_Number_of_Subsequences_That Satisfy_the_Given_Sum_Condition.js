function numSubseq(nums: number[], target: number): number {
  let ans = 0;
  nums.sort((a, b) => a - b);
  const MOD = 1_000_000_007;

  let pow2 = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    pow2[i] = (2 * pow2[i - 1]) % MOD;
  }

  function bSearch(l: number, arr: number[], tar: number): number {
    let res = -1;
    let r = arr.length - 1;
    while (l <= r) {
      let mid = Math.floor((r + l) / 2);
      if (arr[mid] <= tar) {
        res = mid;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return res;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > target) break;
    let anchor = bSearch(i, nums, target - nums[i]);
    if (anchor >= i) {
      ans = (ans + pow2[anchor - i]) % MOD;
    }
  }

  return ans;
}
