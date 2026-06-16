/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const result = Array.from({ length: m }, () => new Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const newCol = (j + k) % n;
      const newRow = (i + Math.floor((j + k) / n)) % m;

      result[newRow][newCol] = grid[i][j];
    }
  }

  return result;
};
