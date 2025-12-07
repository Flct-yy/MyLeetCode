/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const sLen = s.length;
  if (sLen < 2) return 0;
  // 最有效的括号 都是左右括号相等 以右括号结尾
  // dp[i] 代表以s[i]结尾的最长有效括号子串的长度
  const dp = new Array(sLen).fill(0);

  for (let i = 1; i < sLen; i++) {
    // 有效的括号必须以 ')' 结尾
    if (s[i] === ')') {
      // 当前右括号的前一个字符也是右括号(s[i - 1] === ')') 时
      if (s[i - 1] === ')') {
        /**
        * 计算与当前右括号匹配的左括号候选位置：
        * dp[i-1] 是前一个右括号结尾的有效长度，减去这个长度再减1，就是候选匹配位
        */
        const matchIndex = i - dp[i - 1] - 1;
        if (matchIndex >= 0 && s[matchIndex] === "(") {
          /**
           * 计算当前有效长度：
           * 1. dp[i-1]：前一个右括号的有效长度
           * 2. (matchIndex >= 1 ? dp[matchIndex - 1] : 0)：匹配位前的有效长度（若存在）
           * 3. +2：当前匹配的这对括号（matchIndex 和 i 位置）
           */
          dp[i] = dp[i - 1] + (matchIndex >= 1 ? dp[matchIndex - 1] : 0) + 2;
        }
      } else if (s[i - 1] === '(') {
        /**
         * 计算当前有效长度：
         * 1. (i >= 2 ? dp[i - 2] : 0)：i-2位置的有效长度（若i-2≥0则取dp[i-2]，否则取0）
         * 2. +2：当前这对直接匹配的括号（i-1 和 i 位置）
         */
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      }
    }
  }

  return Math.max(...dp);
};