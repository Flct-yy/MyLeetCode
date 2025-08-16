/**
 * 简单实现
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0; // 处理空字符串
  // 字符串转换为数组
  const sArr = Array.from(s);
  // 左右指针 最大长度
  let left = 0,right=0,maxL = 0;
  // 哈希表用来记录字符出现的位置
  const map = new Map();
  // 循环遍历字符串
  while(right<sArr.length){
    if(map.has(sArr[right])){
      // 删掉 左边重复的字符 以及 左右指针不包含的map值
      for(let i =left;i<map.get(sArr[right]);i++){
        map.delete(sArr[i]);
      }
      // 更新左指针
      left = map.get(sArr[right])+1;
      map.set(sArr[right],right);
    }else{
      // 最大长度更新
      maxL = Math.max(maxL,right-left+1);
      // 右指针向右移动，更新哈希表
      map.set(sArr[right],right);
    }
    // 右指针向右移动
    right++;
  }
  return maxL;
};

/**
 * 优化实现
 * 1. 移除不必要的 for 循环删除操作
 * 2. 简化逻辑
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map(); // 存储字符及其最新索引
    let left = 0; // 窗口左边界
    let maxL = 0; // 最长无重复子串长度
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (map.has(char)) {
            // 如果字符已存在，更新 left 到重复字符的下一个位置
            // 为什么不用管 left 之前的字符呢？
            // 因为max left前边的字符索引都比 left 小，所以不用管 并且最后都会更新字符的最新位置
            left = Math.max(left, map.get(char) + 1);
        }
        // 更新当前字符的最新位置
        map.set(char, right);
        // 计算当前窗口长度并更新 maxL
        maxL = Math.max(maxL, right - left + 1);
    }
    return maxL;
};