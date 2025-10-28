/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;
  // 初始化左右指针，采用左闭右闭区间 [left, right]
  let left = 0, right = n - 1;

  // 左闭右闭 [left, right]
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // 只有当 nums[left] <= nums[mid] 时，才有可能有序，否则左侧无序
    if (nums[left] <= nums[mid]) {
      // 左侧有序 时  目标值在左侧时，更新 right
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        // 左侧有序 时  目标值在右侧时，更新 left
        left = mid + 1;
      }
    } else if (nums[mid] < nums[right]) {
      // 右侧有序 时  目标值在右侧时，更新 left
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        // 右侧有序 时  目标值在左侧时，更新 right
        right = mid - 1;
      }
    }
  }

  // 未找到目标值
  return -1;
};