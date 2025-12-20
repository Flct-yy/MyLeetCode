/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const word1Len = word1.length;
  const word2Len = word2.length;
  // 创建dp数组，dp[i][j]表示将word1的前i个字符转换为word2的前j个字符所需的最小操作数
  const dp = Array.from({ length: word1Len + 1 }, () => new Array(word2Len + 1));

  // 初始化边界：当word2为空字符串时，转换word1的前i个字符需要删除i个字符，操作数为i
  for (let i = 0; i <= word1Len; i++) {
    dp[i][0] = i;
  }
  // 初始化边界：当word1为空字符串时，转换为word2的前j个字符需要插入j个字符，操作数为j
  for (let j = 0; j <= word2Len; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1Len; i++) {
    for (let j = 1; j <= word2Len; j++) {
      // 因为dp[i][j]对应word1的前i个字符和word2的前j个字符，
      // 所以word1的第i个字符（前i个字符的最后一个）对应的是索引i-1，word2同理是j-1
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 若当前字符不相等，取三种操作的最小值+1：
        // 1. dp[i-1][j]：删除word1的第i个字符（操作数+1）
        // 2. dp[i][j-1]：在word1后插入word2的第j个字符（操作数+1）
        // 3. dp[i-1][j-1]：替换word1的第i个字符为word2的第j个字符（操作数+1）
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[word1Len][word2Len];
};