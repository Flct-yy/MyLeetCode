/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 用栈来维护解码过程
  const stack = [];

  // 遍历字符串
  for (const char of s) {
    // isNaN 用于判断是否为数字
    if (!isNaN(char)) {
      // 数字入栈
      stack.push(Number(char));
    } else if (char === ']') {
      // 遇到 ']' 出栈 表示已经完成一次闭环

      // 弹出字符
      let str = '';
      while(stack.length && stack[stack.length - 1]!== '[') {
        // 弹出字符并拼接
        str = stack.pop() + str;
      }

      // 弹出 '['
      stack.pop();

      // 弹出数字
      let num = 0;
      // 记录位数
      let digit = 1;
      while(stack.length && !isNaN(stack[stack.length - 1])) {
        // 弹出数字并累加
        num = stack.pop() * digit + num;
        digit *= 10;
      }
 
      // 重复拼接字符串 压入栈
      stack.push(str.repeat(num));
    } else {
      // 其他字符 (字母, [)入栈
      stack.push(char);
    }
  }

  // 最后栈中只有一个字符串表示解码结果
  return stack.join('');
};