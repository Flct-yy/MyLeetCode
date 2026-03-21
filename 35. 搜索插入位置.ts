function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0, right = n - 1, ans = n;
  // 维护两个闭区间
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};