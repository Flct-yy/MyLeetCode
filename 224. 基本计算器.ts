function calculate(s: string): number {
  const stack: number[] = [];
  let num = 0;
  let sign = '+'; // 当前数字的符号（+/-）
  let result = 0; // 当前层级（括号内/外）的计算结果

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    // 1. 解析多位数（比如"123" -> 123）
    if (c >= '0' && c <= '9') {
      num = num * 10 + (c.charCodeAt(0) - '0'.charCodeAt(0));
    }

    // 2. 处理左括号：保存当前状态（结果、符号）到栈，重置状态计算括号内的值
    if (c === '(') {
      stack.push(result); // 保存括号外的结果
      stack.push(sign === '+' ? 1 : -1); // 保存括号前的符号（用1/-1代替+/-更方便）
      // 重置状态，开始计算括号内的子表达式
      result = 0;
      sign = '+';
    }

    // 3. 处理运算符（+/-）或右括号：结算当前数字
    if ((c === '+' || c === '-') || i === s.length - 1 || c === ')') {
      // 根据当前符号，把数字加到结果中
      result += sign === '+' ? num : -num;
      num = 0; // 重置临时数字

      // 更新符号（仅当是+/-时）
      if (c === '+' || c === '-') {
        sign = c;
      }

      // 4. 处理右括号：弹出栈中保存的状态，合并结果
      if (c === ')') {
        const prevSign = stack.pop()!; // 括号前的符号（1/-1）
        const prevResult = stack.pop()!; // 括号外的结果
        result = prevResult + prevSign * result; // 合并括号内和括号外的结果
      }
    }

    // 空格直接跳过，无需处理
  }

  return result;
}