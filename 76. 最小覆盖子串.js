/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // 创建哈希表来存储目标字符串t中每个字符的出现频率
  const map = new Map();

  // 初始化频率映射：统计t中每个字符的出现次数
  for (const char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // 初始化滑动窗口参数
  let left = 0,right = 0,minLen = s.length + 1,count = map.size,minStart = 0;
  
  // 滑动窗口：右指针遍历整个字符串s
  while(right < s.length){
    const r = s.charAt(right);

    // 如果当前字符在目标字符串t中存在
    if(map.has(r)){
      map.set(r,map.get(r) - 1);
      // 如果该字符的需求计数变为0，说明这个字符已经匹配完成
      if (map.get(r) === 0) {
        count--;
      }
    }

    // 右指针向右移动，扩大窗口
    right++;

    // 当所有字符都匹配完成时（count为0），尝试收缩左边界以寻找更小的窗口
    while(count === 0){
      if(right - left < minLen){
        // 因为right指针已经向右移动，所以窗口长度为right - left
        // 如果当前窗口长度小于之前的最小窗口长度，更新最小窗口
        minLen = right - left;
        minStart = left;
      }
      const l = s.charAt(left);

      // 如果左指针字符在目标字符串t中存在
      if(map.has(l)){
        // 增加该字符的需求计数（因为要移出窗口）
        map.set(l,map.get(l) + 1);
        if(map.get(l) > 0){
          count++;
        }
      }
      // 左指针向右移动，收缩窗口
      left++;
    }
  }

  // 如果minLen等于s的长度，说明没有找到合适的窗口，返回空字符串
  // 否则返回最小窗口子串
  return minLen === s.length + 1 ? "" : s.substring(minStart,minStart + minLen);
};