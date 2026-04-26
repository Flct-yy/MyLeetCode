function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      dp[i][j] = Math.min(
        (j - 1) >= 0 ? dp[i][j - 1] : Infinity,
        (i - 1) >= 0 ? dp[i - 1][j] : Infinity
      ) + grid[i][j];

    }
  }
  return dp[m - 1][n - 1];
};