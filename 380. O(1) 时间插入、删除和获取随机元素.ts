class RandomizedSet {
  private arr: Array<number>;
  // 优化：从 boolen转换为number 来存储数字的索引 或者 直接使用Map
  // private comObj: Record<number, boolen>;
  private comObj: Record<number, number>;
  constructor() {
    this.arr = [];
    this.comObj = {};
  }

  insert(val: number): boolean {
    if (val in this.comObj) {
      return false;
    }
    this.comObj[val] = this.arr.length;
    this.arr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!(val in this.comObj)) {
      return false;
    }
    const deleteIndex = this.comObj[val];
    const lastVal = this.arr[this.arr.length - 1];
    this.arr[deleteIndex] = lastVal;
    this.comObj[lastVal] = deleteIndex;
    this.arr.pop();
    delete this.comObj[val];
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */