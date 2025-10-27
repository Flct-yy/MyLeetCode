/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 初始化 left, right, result
  let left = 0;
  let right = nums.length - 1;
  let result = [-1, -1];

  // 左闭右闭 二分查找
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      // 找到 target
      result[0] = mid;
      result[1] = mid;
      // 向左查找第一个
      while (mid > 0 && nums[mid - 1] === target) {
        result[0] = mid - 1;
        mid--;
      }
      // 向右查找最后一个
      while (mid < nums.length - 1 && nums[mid + 1] === target) {
        result[1] = mid + 1;
        mid++;
      }
      return result;
    } else if (nums[mid] < target) {
      // target 在右半部分
      left = mid + 1;
    } else {
      // target 在左半部分
      right = mid - 1;
    }
  }
  // 没找到 target
  return result;
};