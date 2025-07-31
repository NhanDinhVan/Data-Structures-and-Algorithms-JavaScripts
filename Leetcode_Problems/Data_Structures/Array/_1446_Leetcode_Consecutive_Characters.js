function maxPower(s: string): number {
  let max = 1;
  let cur = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cur++;
    } else {
      max = Math.max(max, cur);
      cur = 1;
    }
  }
  return Math.max(max, cur);
}
