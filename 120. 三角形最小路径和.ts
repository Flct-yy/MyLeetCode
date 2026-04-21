function minimumTotal(triangle: number[][]): number {
  const Len = triangle.length;
  const dp: number[][] = new Array(Len);
  for (let i = 0; i < Len; i++) {
    dp[i] = new Array(i + 1).fill(0);
  }
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < Len; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === i) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
      }
    }
  }
  return Math.min(...dp[Len - 1]);
};