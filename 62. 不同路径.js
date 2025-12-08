/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m < 2 || n < 2) return 1;
  // dp[i][j] 表示 (排除第一列和第一行外的区域)  从起始点到当前位置的路径共有几条
  const dp = Array.from({ length: m - 1 }, () => new Array(n - 1).fill(0));
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      dp[i][j] = ((i - 1 >= 0) ? dp[i - 1][j] : 1) + ((j - 1 >= 0) ? dp[i][j - 1] : 1);
    }
  }
  return dp[m - 2][n - 2];
};



/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 边界情况：只有一行或一列时，路径数只能是1（无需计算DP）
  if (m < 2 || n < 2) return 1;

  // 你的核心定义：dp[i][j] 对应原网格 (i+1, j+1) 位置（排除第一行第一列）
  // 维度：m-1行（原第2~m行） × n-1列（原第2~n列）
  const dp = Array.from({ length: m - 1 }, () => new Array(n - 1).fill(0));

  // 遍历核心区域的每一行（对应原网格第2~m行）
  for (let i = 0; i < m - 1; i++) {
    // 关键修正：内层循环列数范围是 n-1（原第2~n列），而非 m-1
    for (let j = 0; j < n - 1; j++) {
      // 上侧值：i-1≥0 则取dp[i-1][j]（原上一行同列），否则为1（原第一行，路径数固定1）
      const top = i - 1 >= 0 ? dp[i - 1][j] : 1;
      // 左侧值：j-1≥0 则取dp[i][j-1]（原同一行前一列），否则为1（原第一列，路径数固定1）
      const left = j - 1 >= 0 ? dp[i][j - 1] : 1;
      // 状态转移：当前位置路径数 = 上侧路径数 + 左侧路径数
      dp[i][j] = top + left;
    }
  }

  // dp[m-2][n-2] 对应原网格终点 (m-1, n-1)
  return dp[m - 2][n - 2];
};



