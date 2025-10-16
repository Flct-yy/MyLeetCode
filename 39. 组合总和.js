/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const candidatesLen = candidates.length;

  /**
   * 
   * @param {number} start - 当前递归可选择的起始索引(用于去重，避免重复组合)
   * @param {number} path - 当前已选择的数字组合
   * @param {number} sum - 当前组合的数字之和
   * @returns 
   */
  const backtrack = (start, path, sum) => {
    // 递归终止条件 找到有效组合
    if (sum === target) {
      res.push(path);
      return;
    }
    // 当前组合的数字之和大于目标值，则停止递归
    if (sum > target) return;

    // 遍历剩余可选数字
    for (let i = start; i < candidatesLen; i++) {
      // 如果当前数字大于目标值，直接跳过)
      if (candidates[i] > target) continue;

      // 递归调用：
      // 1. 下一轮选择从i开始 (允许重复使用当前数字) 但是不允许重复使用之前的数字
      // 2. 新路径为当前路径拼接当前数字（创建新数组，避免引用污染）
      // 3. 新和为当前和加上当前数字
      // 4. 继续递归
      backtrack(i, [...path, candidates[i]], sum + candidates[i]);
    }

  }
  // 初始调用：从索引0开始选择，初始路径为空，初始和为0
  backtrack(0, [], 0);

  return res;
};