/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // 存储结果  
  const result = [];
  // 单调栈 存储索引
  const stack = [];
  
  for(let i = 0; i < temperatures.length; i++){
    // 栈顶元素小于当前元素，栈顶元素出栈
    while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]){
      const index = stack.pop();
      result[index] = i - index;
    }
    // 当前元素入栈
    stack.push(i);
    result[i] = 0;
  }

  return result;
};