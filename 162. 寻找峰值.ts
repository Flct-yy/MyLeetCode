function findPeakElement_1(nums: number[]): number {
  let idx: number = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[idx]) {
      idx = i;
    }
  }
  return idx;
};

function findPeakElement(nums: number[]): number {
  const n: number = nums.length;
  let left = 0;
  let right = nums.length - 1;
  const compare = (idx1: number, idx2: number): boolean => {
    const get = (idx: number): number => {
      if (idx < 0 || idx >= n) {
        return -Infinity;
      }
      return nums[idx];
    }
    const num1 = get(idx1);
    const num2 = get(idx2);

    return num1 < num2;
  }
  while (left < right) {
    // 计算中间索引（避免溢出，等价于 (left + right) / 2）
    const mid = Math.floor((left + right) / 2);

    // 比较中间元素和右侧元素，判断峰值在哪一侧
    if (compare(mid, mid + 1)) {
      // 右侧更大 → 峰值在右侧区间 [mid+1, right]
      left = mid + 1;
    } else {
      // 左侧更大（或相等）→ 峰值在左侧区间 [left, mid]
      right = mid;
    }
  }
  return left;
};