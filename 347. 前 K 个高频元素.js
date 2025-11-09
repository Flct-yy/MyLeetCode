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
      if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
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
      if (leftChildIdx < length && this.heap[leftChildIdx][1] < this.heap[smallestIdx][1]) {
        smallestIdx = leftChildIdx;
      }
      if (rightChildIdx < length && this.heap[rightChildIdx][1] < this.heap[smallestIdx][1]) {
        smallestIdx = rightChildIdx;
      }

      // 交换最小元素和index对应的元素
      if (smallestIdx === index) break;
      [this.heap[smallestIdx], this.heap[index]] = [this.heap[index], this.heap[smallestIdx]];
      index = smallestIdx;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 生成num和num出现频率的键值对
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const minHeap = new MyMinHeap();

  for (const [key, value] of map) {
    if (k > minHeap.size()) {
      // 不能只包留 key  value作为比较元素
      minHeap.push([key, value]);
    } else {
      // 堆大小 ≥ K 时，若当前元素频率 > 堆顶频率，替换堆顶并调整
      if (value > minHeap.heap[0][1]) {
        minHeap.pop(); // 移除频率最小的元素
        minHeap.push([key, value]); // 插入当前高频元素
      }
    }
  }
  
  // 返回的是数组  只要key 不要value
  return minHeap.heap.map(item => item[0]);
};