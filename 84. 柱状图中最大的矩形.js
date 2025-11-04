/**
 * 暴力算法
 * 以当前值为高的前提下判断最大的宽度
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let left = i, right = i;
    // 当左边的高度大于当前高度时，向左移动
    while (heights[left] >= heights[i]) {
      left--;
    }
    // 当右边的高度大于当前高度时，向右移动
    while (heights[right] >= heights[i]) {
      right++;
    }
    // 计算当前高度的最大宽度
    // 因为left 和 right 指向的边界是小于当前高度的，所以需要处理边界
    // (right - 1) - (left + 1) + 1 计算宽度
    let width = right - left - 1;
    // 计算当前高度的面积
    let area = heights[i] * width;
    // 更新最大面积
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
};

/**
 * 使用栈
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  let maxArea = 0;
  // 末尾添加 0 可以清空 stack
  const newHeights = [...heights, 0];

  for (let i = 0; i < newHeights.length; i++) {
    while (stack.length && newHeights[stack[stack.length - 1]] > newHeights[i]) {
      const topIndex = stack.pop();
      // 为什么当stack.length === 0 的时候取-1 因为左边界表示 刚好小于 当前高度的索引
      const width = i - (stack.length === 0 ? -1 : stack[stack.length - 1]) - 1;
      // 计算面积
      const area = heights[topIndex] * width;
      maxArea = Math.max(area, maxArea)
    }
    stack.push(i);
  }

  return maxArea;
};