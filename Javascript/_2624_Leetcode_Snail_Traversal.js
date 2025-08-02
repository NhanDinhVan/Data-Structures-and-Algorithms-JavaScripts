interface Array<T> {
  snail(rowsCount: number, colsCount: number): number[][];
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  const ans: number[][] = Array.from({ length: rowsCount }, () =>
    Array(colsCount).fill(0)
  );
  let i = 0;

  for (let col = 0; col < colsCount; col++) {
    if (col % 2 === 0) {
      for (let row = 0; row < rowsCount; row++) {
        ans[row][col] = this[i++];
      }
    } else {
      for (let row = rowsCount - 1; row >= 0; row--) {
        ans[row][col] = this[i++];
      }
    }
  }

  return ans;
};
