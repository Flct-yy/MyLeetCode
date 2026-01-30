function minWindow(s: string, t: string): string {
  const sL = s.length;
  const tL = t.length;
  if (sL === 0 || tL === 0) {
    return "";
  }

  const tMap = new Map();
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }
  let left = 0
  let right = 0;
  let matchCount = 0;
  let minL = sL + 1;
  let res = '';
  const tempMap = new Map();

  while (right < sL) {
    const currentWord = s[right];
    if (tMap.has(currentWord)) {
      const currentWordTempCount = (tempMap.get(currentWord) || 0) + 1;
      tempMap.set(currentWord, currentWordTempCount);
      if (currentWordTempCount <= tMap.get(currentWord)) {
        matchCount++;
      }
    }

    while (matchCount === tL) {
      const currentWindowLength = right - left + 1;

      if (currentWindowLength < minL) {

        minL = currentWindowLength;
        res = s.substring(left, right + 1);
      }

      const leftChar = s[left];
      if (tMap.get(leftChar) !== undefined) {
        // 缓存值，减少冗余查找
        const windowCount = tempMap.get(leftChar);
        const tCount = tMap.get(leftChar);

        tempMap.set(leftChar, windowCount - 1);

        // 只有当窗口内该字符数量不足时，才减少 matchCount
        if (tempMap.get(leftChar) < tCount) {
          matchCount--;
        }
      }
      // 左指针右移，收缩窗口
      left++;
    }

    right++;
  }
  return res;
};