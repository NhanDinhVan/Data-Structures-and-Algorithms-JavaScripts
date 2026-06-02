function sortByBits(arr: number[]): number[] {
  const countBit = function (n: number): number {
    return n
      .toString(2)
      .replace("-", "")
      .split("")
      .reduce((res, cur) => {
        return cur === "1" ? res + 1 : res;
      }, 0);
  };
  const counted = arr.map((item) => ({ val: item, bit: countBit(item) }));
  counted.sort((a, b) => {
    if (a.bit === b.bit) return a.val - b.val;
    return a.bit - b.bit;
  });
  return counted.map((item) => item.val);
}
