function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ]);
  
  const result: string[] = [];
  const digitsLen: number = digits.length;

  /**
   * 回溯函数：递归生成字母组合
   * @param {number} index 
   * @param {string} currentStr 
   * @returns 
   */
  const backtrack = (index: number, currentStr: string) => {
    // 终止条件：当处理完所有数字（索引等于数字串长度），将当前组合加入结果集
    if (index === digitsLen) {
      result.push(currentStr);
      return;
    }

    // 取出当前数字对应的字母（加非空判断增强健壮性）
    const letters = map.get(digits[index]);
    if (!letters) return;

    // 遍历每个字母，递归拼接
    letters.split('').forEach((letter: string) => {
      // 字符串不可变，currentStr + letter 生成新字符串，天然回溯
      backtrack(index + 1, currentStr + letter);
    });
  }
  backtrack(0, '');
  return result;
};