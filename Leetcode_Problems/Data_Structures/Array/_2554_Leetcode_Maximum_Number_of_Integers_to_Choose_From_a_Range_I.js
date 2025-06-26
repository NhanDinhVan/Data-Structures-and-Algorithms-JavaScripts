function maxCount(banned: number[], n: number, maxSum: number): number {
  let count = 0;
  let curSum = 0;

  const bannedSet = new Set(banned); // dùng Set để tìm kiếm nhanh hơn

  for (let i = 1; i <= n; i++) {
    if (!bannedSet.has(i) && curSum + i <= maxSum) {
      curSum += i;
      count++;
    }
  }

  return count;
}
