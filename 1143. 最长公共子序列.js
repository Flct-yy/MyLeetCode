/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const t_1Len = text1.length;
  const t_2Len = text2.length;

  // 边界条件：如果任一字符串为空，直接返回0（无公共子序列）
  if (t_1Len < 1 || t_2Len < 1) {
    return 0;
  }

  // dp[i][j] 表示text1中前i个元素和text2前j个元素的子序列长度
  const dp = Array.from({ length: t_1Len + 1 }, () => new Array(t_2Len + 1).fill(0));
  for (let i = 1; i <= t_1Len; i++) {
    for (let j = 1; j <= t_2Len; j++) {

      // 当前两个字符相等时
      // 此时dp[i][j] = 两个字符串都去掉当前字符后的LCS长度 + 1（当前字符）
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {

        // 情况2：当前两个字符不相等，取两种情况的最大值
        // 情况a：text1去掉当前字符，和text2前j个字符的长度（dp[i-1][j]）
        // 情况b：text2去掉当前字符，和text1前i个字符的长度（dp[i][j-1]）
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[t_1Len][t_2Len];
};