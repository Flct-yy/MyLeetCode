/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 获取字符串长度
  const sLen = s.length;
  // 字符串长度为奇数，肯定不合法
  if (sLen % 2 !== 0) {
    return false;
  }
  // 存储 向右开口的括号
  let stack = [];
  // 定义括号对
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < sLen; i++) {
    // 获取当前字符
    const char = s[i];
    // 如果是右括号，则判断栈顶是否为对应的左括号
    if (pairs[char]){
      // 如果栈为空，或者栈顶元素不是对应的左括号，则不合法
      if (stack.length === 0 || stack.pop()!== pairs[char]) {
        return false;
      }
    } else {
      //如果是左括号，则压入栈
      stack.push(char);
    }
  }

  // 如果栈为空，则合法
  return stack.length === 0;
};