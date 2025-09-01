function surfaceArea(grid: number[][]): number {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const len = grid.length;
    let ans = 0;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (grid[i][j] === 0) continue;

            ans += 2;

            directions.forEach(([dx, dy]) => {
                const x = i + dx;
                const y = j + dy;

                if (x < 0 || x >= len || y < 0 || y >= len) {
                    ans += grid[i][j];
                } else {
                    ans += Math.max(0, grid[i][j] - grid[x][y]);
                }
            });
        }
    }

    return ans;
}
