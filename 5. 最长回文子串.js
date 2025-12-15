/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const sLen = s.length;
  // 定义二维dp数组：dp[i][j] 表示子串s[i..j]（左闭右闭区间）是否为回文子串
  // Array.from创建长度为sLen的数组，每个元素是一个长度为sLen的空数组（初始值为undefined）
  const dp = Array.from({ length: sLen }, () => new Array(sLen));
  // 初始化：单个字符的子串一定是回文子串（长度为1的回文）
  for (let i = 0; i < sLen; i++) {
    dp[i][i] = true;
  }


  // 记录最长回文子串的长度，初始值为1（单个字符的最小回文长度）
  let maxLen = 1;
  // 记录最长回文子串的起始索引，初始值为0
  let begin = 0;


  // 先枚举子串长度而不是一次遍历i和j
  // 遍历i和j时i+1和j-1的位置可能没有值
  for (let L = 2; L <= sLen; L++) {
    for (let i = 0; i < sLen; i++) {
      // 计算子串的结束索引j（j为右边界），由i和长度L推导：j = i + L - 1（因为区间[i..j]的长度是L）
      let j = i + L - 1;
      if (j >= sLen) {
        break;
      }
      if (s.charAt(i) !== s.charAt(j)) {
        dp[i][j] = false;
      } else {
        if (i + 1 <= j - 1)
          dp[i][j] = dp[i + 1][j - 1];
        else
          dp[i][j] = true;
      }

      // 若当前子串是回文，且长度大于已记录的最长回文长度，则更新记录
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.slice(begin, begin + maxLen);
};