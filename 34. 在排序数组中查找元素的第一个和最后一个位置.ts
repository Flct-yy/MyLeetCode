function searchRange(nums: number[], target: number): number[] {
  const n = nums.length;

  const binarySearch = (target: number, lower: boolean) => {
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }

  let res: number[] = [-1, -1];
  const leftIdx = binarySearch(target, true);
  const rightIdx = binarySearch(target, false) - 1;

  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    res = [leftIdx, rightIdx];
  }

  return res;
};