function minimumCost(nums: number[]): number {
  const normalizedNums = nums.slice(1, nums.length).sort((a, b) => a - b);

  return nums[0] + normalizedNums[0] + normalizedNums[1];
}
