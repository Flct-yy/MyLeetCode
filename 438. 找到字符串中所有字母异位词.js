/**
 * 简单思路
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const sArr = Array.from(s);
    const pArr = Array.from(p);
    const charCountMap = new Map();
    const res = [];

    for (const char of p) {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }

    for(let left = 0; left <= (sArr.length-pArr.length); left++){
      let right = left + pArr.length - 1;
      const tempMap = new Map();

      for(let i =left;i<=right;i++){
        const res = (tempMap.get(sArr[i]) || 0) + 1;
        tempMap.set(sArr[i],res);
      }

      let isRes = 1;

      for (const [key, value] of charCountMap) {
        if (!tempMap.has(key)) isRes = 0; // 检查 map2 是否有该 key
        if (tempMap.get(key) !== value) isRes = 0; // 检查 value 是否相同
      }

      if(isRes === 1) res.push(left);
    }

    return res;
};

/**
 * 优化
 * 减少不必要的 Map 创建和比较
 * 改用固定长度的数组代替 Map
 * 减少重复计算
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
  const sLen = s.length;
  const pLen = p.length;

  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);

  const res = [];

  for(let i = 0;i < pLen;i++){
    pCount[p.charCodeAt(i)- 97]++;
    sCount[s.charCodeAt(i)- 97]++;
  }

  if(arraysEqual(sCount,pCount)){
    res.push(0);
  }

  for(let left = 1;left <= sLen - pLen;left++){
    const right = left + pLen - 1;

    sCount[s.charCodeAt(left-1)- 97]--;
    sCount[s.charCodeAt(right)- 97]++;
    
    if(arraysEqual(sCount,pCount)){
      res.push(left);
    }
  }

  return res;
};

// 辅助函数：比较两个数组是否相等
function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

/**
 * 两着共有一个数组
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;

  // 26小写字母 数组 都填充为 0 
  const Count = new Array(26).fill(0);

  const res = [];

  // s 和 p 的前pLen位都在一个 数组里 加减
  for(let i = 0;i < pLen;i++){
    Count[p.charCodeAt(i)- 97]--;
    Count[s.charCodeAt(i)- 97]++;
  }

  // 如果每个数 都为 0 则 两字符串相等
  if(Count.every(i => i === 0)){
    res.push(0);
  }

  for(let left = 1;left <= sLen - pLen;left++){

    // 因为要与 p 相等 所以 左右边际 差值不变为 (总长为pLen)
    // 左边 +1 去除一个
    // 右边 +1 增加一个
    Count[s.charCodeAt(left-1)- 97]--;
    Count[s.charCodeAt(left + pLen - 1)- 97]++;
    
    // 判断是否相等
    if(Count.every(i => i === 0)){
      res.push(left);
    }
  }

  return res;
};