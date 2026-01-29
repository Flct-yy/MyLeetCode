function lengthOfLongestSubstring_1(s: string): number {
  const sL = s.length;
  const map = new Map<string, number>();
  if (sL === 0) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let res = 1;
  map.set(s[0], 0);
  while (right < sL && left < sL) {
    if (map.has(s[right]) && map.get(s[right])! >= left) {
      left = map.get(s[right])! + 1;
    }
    res = Math.max(res, right - left + 1);
    map.set(s[right], right);
    right++;
  }
  return res;
};

function lengthOfLongestSubstring_2(s: string): number {
  const map = new Map<string, number>(); // 存储字符 -> 字符最新出现的索引
  let left = 0; // 滑动窗口左边界（左闭）
  let res = 0; // 记录最长无重复子串长度
  const sL = s.length;

  // 右指针right遍历字符串，作为滑动窗口右边界（右闭）
  for (let right = 0; right < sL; right++) {
    const currentChar = s[right];
    // 关键：如果当前字符已存在，且其索引在左边界右侧（说明在当前窗口内重复）
    if (map.has(currentChar) && map.get(currentChar)! >= left) {
      // 直接将左边界跳到重复字符的下一个位置，无需删除map中的旧数据
      left = map.get(currentChar)! + 1;
    }
    // 更新当前字符的最新索引（无论是否重复，都要更新，保证后续判断准确）
    map.set(currentChar, right);
    // 计算当前窗口长度，更新最大值（每次循环都计算，避免else分支的遗漏）
    res = Math.max(res, right - left + 1);
  }

  return res;
}