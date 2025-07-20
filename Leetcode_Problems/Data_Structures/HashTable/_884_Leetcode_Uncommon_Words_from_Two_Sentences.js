function uncommonFromSentences(s1: string, s2: string): string[] {
  const arr = [...s1.split(" "), ...s2.split(" ")];
  let map = new Map();
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value === 1) {
      ans.push(key);
    }
  }
  return ans;
}
