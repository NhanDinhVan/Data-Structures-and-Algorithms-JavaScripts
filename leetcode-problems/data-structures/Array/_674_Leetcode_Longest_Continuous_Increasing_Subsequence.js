function findLengthOfLCIS(nums: number[]): number {
  let max = 1;
  let cur = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      cur++;
    } else {
      max = Math.max(cur, max);
      cur = 1;
    }
  }
  return Math.max(cur, max);
}
