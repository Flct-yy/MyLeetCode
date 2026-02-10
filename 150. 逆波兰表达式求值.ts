function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operators = new Set(['+', '-', '*', '/']);
  for (const token of tokens) {
    if (operators.has(token)) {
      // 非空断言：合法逆波兰表达式必然有足够的操作数
      const right = stack.pop();
      const left = stack.pop();
      if (left === undefined || right === undefined) {
        throw new Error(`Invalid RPN expression: ${tokens.join(' ')}`);
      }
      let result: number;
      switch (token) {
        case '+':
          result = left + right;
          break;
        case '-':
          result = left - right;
          break;
        case '*':
          result = left * right;
          break;
        case '/':
          // 核心修复：Math.trunc 实现向零取整
          result = Math.trunc(left / right);
          break;
        default:
          throw new Error(`Unsupported operator: ${token}`);
      }
      stack.push(result);
    } else {
      // 数字直接入栈，兼容正负数字（如 "-123"）
      stack.push(Number(token));
    }
  }
  return stack[0];
};