function minDistance(word1: string, word2: string): number {
  let n = word1.length;
  let m = word2.length;

  // 有一个字符串为空串
  if (n * m == 0) {
    return n + m;
  }

  // dp 数组
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1));

  // 边界状态初始化
  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < m + 1; j++) {
    dp[0][j] = j;
  }

  // 计算所有 dp 值
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      let left = dp[i - 1][j] + 1;
      let down = dp[i][j - 1] + 1;
      let left_down = dp[i - 1][j - 1];
      if (word1.charAt(i - 1) != word2.charAt(j - 1)) {
        left_down += 1;
      }
      dp[i][j] = Math.min(left, Math.min(down, left_down));
    }
  }
  return dp[n][m];
};