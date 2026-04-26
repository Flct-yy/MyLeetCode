function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(Infinity));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
        continue;
      }
      dp[i][j] = (j - 1 >= 0 && dp[i][j - 1]) + (i - 1 >= 0 && dp[i - 1][j]);
    }
  }

  return dp[m - 1][n - 1];
};