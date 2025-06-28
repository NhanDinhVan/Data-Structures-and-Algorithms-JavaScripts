function maxSubsequence(nums: number[], k: number): number[] {
  const indexed = nums.map((val, idx) => ({ val, idx }));

  indexed.sort((a, b) => b.val - a.val);

  const topK = indexed.slice(0, k);

  topK.sort((a, b) => a.idx - b.idx);

  return topK.map((e) => e.val);
}
