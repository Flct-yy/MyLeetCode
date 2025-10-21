/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // 缓存符合的结果
  const res = [];
  // 保存字符串的长度
  const sLen = s.length;

  /**
   * 判断子串是否为回文串
   * @param {number} left 
   * @param {number} right 
   * @return {boolean}
   */
  const isPalindrome = (left, right) => {
    // 双指针从两端向中间逼近，判断字符是否对称相等
    while (left < right) {
      // 字符不对称，不是回文串
      if (s[left] !== s[right]) return false;
      // 左指针向右移动 右指针向左移动
      left++;
      right--;
    }
    //当所有的字符都对称相等时，是回文串
    return true;
  }
  /**
   * 回溯函数：递归探索所有可能的回文串分割方案
   * @param {number} index 
   * @param {string[]} path 
   * @returns {void}
   */
  const backtrack = (index, path) => {
    // 终止条件：当切割起始索引等于字符串长度时，说明已完成一次完整切割
    if (index === sLen) {
      // 注意:此处必须深拷贝path（用扩展运算符创建新数组）
      // 原因：path是引用类型，直接push会导致后续修改影响已存入的结果（浅拷贝会保存相同引用，最终可能都变为空数组）
      res.push([...path]);
      return;
    }

    // 遍历所有可能的切割终点（从当前起始索引index到字符串末尾）
    for (let i = index; i < sLen; i++) {
      // 剪枝：只有当前子串 s[index..i] 是回文串时，才继续递归切割
      if (isPalindrome(index, i)) {
        // 选择：将当前回文子串加入路径（substring截取从index到i的字符，含i）
        path.push(s.substring(index, i + 1))
        // 递归：从下一个索引（i+1）开始继续切割
        backtrack(i + 1, path);
        // 回溯：移除最后加入的子串，恢复路径状态，尝试其他切割方式
        path.pop();
      }
    }
  }
  // 从字符串的第0个索引开始首次切割，初始路径为空数组
  backtrack(0, []);

  // 返回所有符合的结果
  return res;
};