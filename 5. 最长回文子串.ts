function longestPalindrome(s: string): string {
  const n = s.length;
  // 边界：空字符串直接返回
  if (n === 0) return "";

  const dp = Array.from({ length: n }, () => new Array(n).fill(false));

  let maxLen = 1; // 最长回文长度，最小为1
  let start = 0;  // 最长回文起始索引

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let len = 2; len <= n; len++) {
    for (let left = 0; left < n; left++) {
      const right = left + len - 1;
      if (right >= n) break;
      // 核心判断：首尾字符相等
      if (s[left] === s[right]) {
        // 长度为2：直接是回文
        if (len === 2) {
          dp[left][right] = true;
        } else {
          // 长度>2：依赖内部子串是否是回文
          dp[left][right] = dp[left + 1][right - 1];
        }
      }

      // 更新最长回文子串
      if (dp[left][right] && len > maxLen) {
        maxLen = len;
        start = left;
      }
    }
  }

  return s.substring(start, start + maxLen);
};