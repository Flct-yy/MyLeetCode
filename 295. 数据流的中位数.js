/**
 * 使用两个堆来实现
 * 大顶堆 中存放的是比堆顶元素小的
 * 小顶堆 中存放的是比堆顶元素大的
 * 当数组为偶数时 中位数取 两个堆顶元素 的平均值
 * 当数组为奇数时 中位数取 大顶堆 的堆顶
 * 并且大顶堆和小顶堆长度一样 只有为奇数时 大顶堆比小顶堆大 1
 * 大顶堆可以自己实现, 也可以对数字取反(加负号-)来实现(利用小顶堆)
 */
class MyMinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  pop() {
    // 保存栈顶元素
    const min = this.heap[0];
    // 因为头节点被取出,所以将末尾元素补位
    // 直接取出最后一个元素    
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      // 把最后一个元素放在栈顶处
      this.heap[0] = last;
      // 下沉
      this.bubbleDown(0);
    }
    return min;
  }
  size() {
    return this.heap.length;
  }
  top() {
    return this.heap[0];
  }
  /**
   * 上浮
   * @param {number} index 
   */
  bubbleUp(index) {
    // 当 index > 0 时,才会有父节点
    while (index > 0) {
      // 获得父节点的索引
      const parentIndex = Math.floor((index - 1) / 2);
      // 保持父节点 >= 子节点
      if (this.heap[parentIndex] <= this.heap[index]) break;
      // 交换两个节点
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }
  /**
   * 下沉
   * @param {number} index 
   */
  bubbleDown(index) {
    // 父节点与两个子节点比较哪个最小放到父节点的位置上
    const length = this.heap.length;
    while (true) {
      // 左右节点的索引
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let smallestIdx = index;

      // 找到最小元素的索引
      if (leftChildIdx < length && this.heap[leftChildIdx] < this.heap[smallestIdx]) {
        smallestIdx = leftChildIdx;
      }
      if (rightChildIdx < length && this.heap[rightChildIdx] < this.heap[smallestIdx]) {
        smallestIdx = rightChildIdx;
      }

      // 交换最小元素和index对应的元素
      if (smallestIdx === index) break;
      [this.heap[smallestIdx], this.heap[index]] = [this.heap[index], this.heap[smallestIdx]];
      index = smallestIdx;
    }
  }
}

var MedianFinder = function () {
  this.maxHeap = new MyMinHeap();
  this.minHeap = new MyMinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // 插入的时候满足 大顶堆=小顶堆 或者 大顶堆=小顶堆+1   大顶堆的元素要小于小顶堆的元素
  // 先插入大顶堆  在调整两个堆的长度

  this.maxHeap.push(-num);
  while (!(this.maxHeap.size() === this.minHeap.size() || this.maxHeap.size() === this.minHeap.size() + 1)) {
    //因为直接存入大顶堆 所以只有可能 大顶堆 大于 小顶堆
    this.minHeap.push(-this.maxHeap.pop());
  }

  // 此时两个堆的长度已经符合 但是堆顶元素大小没有符合(不要忘记大顶堆里面的元素是负数)
  while (-this.maxHeap.top() > this.minHeap.top()) {
    const temp = -this.maxHeap.pop();
    this.maxHeap.push(-this.minHeap.pop());
    this.minHeap.push(temp);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() === this.minHeap.size()) {
    return (this.minHeap.top() - this.maxHeap.top()) / 2
  }
  return -this.maxHeap.top();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */