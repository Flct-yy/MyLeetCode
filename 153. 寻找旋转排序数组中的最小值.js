/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let minVal = nums[0];

  // 左闭右闭 二分查找
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      // 左边 从小到大排序 最小值也可能在右边
      minVal = Math.min(minVal, nums[left]);
      left = mid + 1;

    } else if (nums[mid] < nums[right]) {
      // 右边 从小到大排序 最小值也可能在左边
      minVal = Math.min(minVal, nums[mid]);
      right = mid - 1;
    } else {
      // left = right 说明数组中只有一个元素，直接比较返回
      minVal = Math.min(minVal, nums[right]);
      break; // 退出循环，避免死循环
    }
  }

  return minVal;
};