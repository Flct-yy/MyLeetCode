function longestCommonPrefix_1(strs: string[]): string {
  let res = '';
  for (let j = 0; j < strs[0].length; j++) {
    let isEqual = true;
    let overLen = false;
    for (let i = 1; i < strs.length; i++) {
      if (j > strs[i].length) {
        overLen = true;
        break;
      }
      if (strs[i][j] !== strs[0][j]) {
        isEqual = false;
        break;
      }
    }
    if (isEqual && !overLen) {
      res += strs[0][j];
    } else {
      break;
    }
  }
  return res;
};

function longestCommonPrefix_2(strs: string[]): string {
  // 找到最短字符串的长度（前缀最长不可能超过这个长度）
  let minLen = Infinity;
  for (const str of strs) {
    minLen = Math.min(minLen, str.length);
  }
  let low = 0, high = minLen;
  while (low < high) {
    // 向上取整，避免死循环
    const mid = Math.floor((low + high + 1) / 2);
    if (isCommonPrefix(strs, mid)) {
      low = mid; // 长度mid的前缀有效，尝试更长的
    } else {
      high = mid - 1; // 长度mid的前缀无效，尝试更短的
    }
  }
  return strs[0].substring(0, low);
};

// 辅助函数：检查所有字符串是否有长度为len的公共前缀
function isCommonPrefix(strs: string[], len: number): boolean {
  const prefix = strs[0].substring(0, len);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix)) {
      return false;
    }
  }
  return true;
}