function projectionArea(grid: number[][]): number {
  let z = 0;  
  let x = 0; 
  let y = 0;  

  const n = grid.length;

  for (let i = 0; i < n; i++) {
    let rowMax = 0;
    let colMax = 0;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) z++;             
      rowMax = Math.max(rowMax, grid[i][j]);  
      colMax = Math.max(colMax, grid[j][i]);  
    }
    x += rowMax;
    y += colMax;
  }

  return x + y + z;
};