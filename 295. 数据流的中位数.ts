class MedianFinder {
  maxHeap: Array<number>;
  minHeap: Array<number>;
  constructor() {
    this.maxHeap = [];
    this.minHeap = [];
  }

  addNum(num: number): void {
    // 第一步：决定放入哪个堆
    if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
      // 比大顶堆堆顶小 → 放入大顶堆
      this.pushMaxHeap(num);
    } else {
      // 比大顶堆堆顶大 → 放入小顶堆
      this.pushMinHeap(num);
    }

    // 第二步：平衡两个堆的大小
    // 规则1：大顶堆长度 只能等于 小顶堆长度 或 比小顶堆多1
    // 规则2：不允许 小顶堆 比 大顶堆 长
    if (this.maxHeap.length > this.minHeap.length + 1) {
      // 大顶堆多了2个及以上 → 挪一个到小顶堆
      const val = this.popMaxHeap()!;
      this.pushMinHeap(val);
    } else if (this.minHeap.length > this.maxHeap.length) {
      // 小顶堆更长 → 挪一个到大顶堆
      const val = this.popMinHeap()!;
      this.pushMaxHeap(val);
    }
  }

  findMedian(): number {
    const maxHeapSize = this.maxHeap.length;
    const minHeapSize = this.minHeap.length;
    if (maxHeapSize === minHeapSize) return (this.maxHeap[0] + this.minHeap[0]) / 2;
    else return this.maxHeap[0];
  }

  private pushMaxHeap(num: number) {
    this.maxHeap.push(num);
    // 向上调整（大顶堆：子节点比父大就交换）
    let i = this.maxHeap.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1; // 父节点索引
      if (this.maxHeap[parent] >= this.maxHeap[i]) break;
      [this.maxHeap[parent], this.maxHeap[i]] = [this.maxHeap[i], this.maxHeap[parent]];
      i = parent;
    }
  }

  private popMaxHeap(): number | undefined {
    if (this.maxHeap.length === 0) return undefined;
    // 堆顶和最后一个交换，再弹出最后一个
    const top = this.maxHeap[0];
    const last = this.maxHeap.pop()!;
    if (this.maxHeap.length > 0) {
      this.maxHeap[0] = last;
      // 向下调整
      let i = 0;
      const n = this.maxHeap.length;
      while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;
        if (left < n && this.maxHeap[left] > this.maxHeap[largest]) largest = left;
        if (right < n && this.maxHeap[right] > this.maxHeap[largest]) largest = right;
        if (largest === i) break;
        [this.maxHeap[i], this.maxHeap[largest]] = [this.maxHeap[largest], this.maxHeap[i]];
        i = largest;
      }
    }
    return top;
  }

  private pushMinHeap(num: number) {
    this.minHeap.push(num);
    // 向上调整（小顶堆：子节点比父小就交换）
    let i = this.minHeap.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.minHeap[parent] <= this.minHeap[i]) break;
      [this.minHeap[parent], this.minHeap[i]] = [this.minHeap[i], this.minHeap[parent]];
      i = parent;
    }
  }

  private popMinHeap(): number | undefined {
    if (this.minHeap.length === 0) return undefined;
    const top = this.minHeap[0];
    const last = this.minHeap.pop()!;
    if (this.minHeap.length > 0) {
      this.minHeap[0] = last;
      // 向下调整
      let i = 0;
      const n = this.minHeap.length;
      while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;
        if (left < n && this.minHeap[left] < this.minHeap[smallest]) smallest = left;
        if (right < n && this.minHeap[right] < this.minHeap[smallest]) smallest = right;
        if (smallest === i) break;
        [this.minHeap[i], this.minHeap[smallest]] = [this.minHeap[smallest], this.minHeap[i]];
        i = smallest;
      }
    }
    return top;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */