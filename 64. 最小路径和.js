/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const row = grid[0].length;
  const col = grid.length;

  // dp[i][j] 表示第i行的第j列
  // const dp = new Array(col);
  // for (let i = 0; i < col; i++) {
  //   dp[i] = new Array(row);
  // }

  // 也可以这样初始化
  const dp = Array.from({ length: col }, () => new Array(row).fill(0));


  dp[0][0] = grid[0][0]
  for (let i = 1; i < col; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < row; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }


  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      const up = (i - 1 >= 0 ? dp[i - 1][j] : 0);
      const left = (j - 1 >= 0 ? dp[i][j - 1] : 0);
      dp[i][j] = Math.min(up, left) + grid[i][j];
    }
  }

  return dp[col - 1][row - 1];
};