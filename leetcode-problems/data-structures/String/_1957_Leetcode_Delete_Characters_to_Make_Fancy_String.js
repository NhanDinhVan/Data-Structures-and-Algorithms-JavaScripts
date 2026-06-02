function makeFancyString(s: string): string {
  let ans = "";
  let cur = "";
  for (let i = 0; i < s.length; i++) {
    if (cur.length < 2) {
      cur += s[i];
    }
    if (s[i + 1] !== s[i] || i === s.length) {
      ans += cur;
      cur = "";
    }
  }
  return ans;
}
