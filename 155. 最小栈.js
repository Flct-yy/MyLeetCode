/**
 * 设计一个支持 O(1) 时间复杂度获取最小值的栈（MinStack）
 * 核心思路：使用两个栈，主栈存储所有元素，辅助栈同步存储对应位置的最小值
 */
var MinStack = function () {
  // 主栈：存储所有元素，支持正常的 push、pop、top 操作
  this.stack = [];
  // 辅助栈：与主栈长度始终保持一致，栈顶元素为对应主栈位置的最小值
  this.minStack = [];
};

/** 
 * 向栈中压入一个元素
 * @param {number} val - 要压入的元素
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // 1. 主栈正常压入元素
  this.stack.push(val);

  // 2. 辅助栈压入“当前位置的最小值”：
  // - 若辅助栈为空（首次压入），当前值就是最小值，直接压入
  // - 若当前值 <= 辅助栈顶（当前最小值），则更新最小值，压入当前值
  // - 否则，压入辅助栈顶（保持当前最小值不变）
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
  } else {
    this.minStack.push(this.minStack[this.minStack.length - 1]);
  }
};

/**
 * 弹出栈顶元素（主栈和辅助栈同步弹出，保持长度一致）
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 辅助栈弹出栈顶（与主栈同步，确保长度一致）
  this.minStack.pop();
  // 主栈弹出栈顶元素
  this.stack.pop();
};

/**
 * 获取栈顶元素（仅操作主栈）
 * @return {number} - 栈顶元素的值
 */
MinStack.prototype.top = function () {
  // 返回主栈的栈顶元素（最后一个元素）
  return this.stack[this.stack.length - 1];
};

/**
 * 获取当前栈中的最小值（O(1) 时间复杂度）
 * @return {number} - 栈中的最小值
 */
MinStack.prototype.getMin = function () {
  // 辅助栈的栈顶元素始终是当前主栈的最小值，直接返回
  return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */