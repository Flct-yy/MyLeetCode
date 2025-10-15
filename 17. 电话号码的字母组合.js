/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 处理空输入的边界情况
  if (digits.length === 0) return [];

  // 映射表：数字到对应字母的映射（模拟手机键盘）
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const result = [];
  const digitsLen = digits.length;

  /**
   * 回溯函数：递归生成字母组合
   * @param {number} index 
   * @param {string} currentStr 
   * @returns 
   */
  const backtrack = (index, currentStr) => {
    // 终止条件：当处理完所有数字（索引等于数字串长度），将当前组合加入结果集
    if (index === digitsLen) {
      result.push(currentStr);
      return;
    }

    // 取出当前数字对应的字母集，遍历每个字母
    map[digits[index]].split('').forEach(letter => {
      // 递归处理下一个数字：将当前字母拼接到组合中，索引+1
      // 无需显式回溯：因为字符串是不可变的，currentStr + letter会生成新字符串，不影响原变量
      backtrack(index + 1, currentStr + letter);
    })
  }

  backtrack(0, '');
  return result
};