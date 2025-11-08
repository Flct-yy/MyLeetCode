/**
 * 快速选择算法
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 第 K 大元素 = 升序排序后第 (n - k) 个元素（0-based 索引）
  const targetIndex = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, targetIndex);
};

/**
 * 快速选择核心函数：在 [left, right] 范围内寻找第 targetIndex 小的元素
 * @param {number[]} nums 
 * @param {number} left 
 * @param {number} right 
 * @param {number} target 
 * @returns 
 */
function quickSelect(nums, left, right, target) {
  const pivotIndex = partition(nums, left, right);
  if (pivotIndex === target) return nums[pivotIndex];
  else if (pivotIndex < target) {
    return quickSelect(nums, pivotIndex + 1, right, target)
  } else {
    return quickSelect(nums, left, pivotIndex - 1, target)
  }
}

/**
 * 分区函数：将数组分为两部分（左侧 ≤ 基准，右侧 > 基准）
 * 所有区间都为闭区间
 * @param {number[]} nums 
 * @param {number} left 区间左边界
 * @param {number} right 区间右边界
 * @returns 
 */
function partition(nums, left, right) {
  // Math.random()随机生成 0~1的数 乘以 区间总长度 + 左边界  算出一个随机的索引
  const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
  // 将随机的索引放到 右边
  [nums[right], nums[randomIndex]] = [nums[randomIndex], nums[right]];

  const pivot = nums[right];
  // 左边界
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivot) {
      i++;
      // 交换元素到左侧区域
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  // 将基准元素放到「左侧区域」的右侧（i+1 位置），即基准的最终位置
  [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];
  return i + 1; // 返回基准索引
}

/**
 * 堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 因为JS中没有堆数据类型  所以创建一个堆数据类型(小顶堆)
// 因为 LeetCode 有 MinHeap 的实现 所以可以不用写 MyMinHeap
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
var findKthLargest = function (nums, k) {
  const minHeap = new MyMinHeap();
  for (let num of nums) {
    minHeap.push(num);
    // 当堆大小超过 K 时，弹出最小元素（堆顶），确保堆中只保留前 K 大的元素
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }
  return minHeap.top();
};