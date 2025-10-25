/**
 * 左闭右闭区间 [left, right] 二分查找
 * （区间含义：搜索范围包含 left 和 right 位置的元素，即有效索引范围：left ≤ index ≤ right）
 * @param {number[]} nums - 无重复元素的升序排列数组
 * @param {number} target - 目标值（需查找或确定插入位置）
 * @return {number} - 若目标值存在则返回索引，否则返回插入位置
 */
var searchInsert = function (nums, target) {
  // 初始化边界：左边界从 0 开始，右边界为数组最后一个元素的索引
  let left = 0, right = nums.length - 1;

  // 循环条件：当 left ≤ right 时，区间 [left, right] 仍有元素可查
  // 若 left > right，说明区间为空，所有元素已检查完毕
  while (left <= right) {
    // 计算中间位置（避免 (left + right) 溢出，也可写成 left + Math.floor((right - left) / 2)）
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      // 中间值小于目标值 → 目标值一定在 mid 右侧，收缩左边界（mid 及左侧元素可排除）
      left = mid + 1;
    } else if (nums[mid] > target) {
      // 中间值大于目标值 → 目标值一定在 mid 左侧，收缩右边界（mid 及右侧元素可排除）
      right = mid - 1;
    } else {
      // 中间值等于目标值 → 找到目标，直接返回索引
      return mid;
    }
  }

  // 循环结束时：left > right（区间为空），此时 left 即为插入位置
  // 原因：left 左侧的所有元素（≤ right）都小于 target，left 及右侧元素都大于 target
  return left;
};

/**
 * 左闭右开区间 [left, right) 二分查找
 * （区间含义：搜索范围包含 left 位置的元素，但不包含 right 位置的元素，即有效索引范围：left ≤ index < right）
 * @param {number[]} nums - 无重复元素的升序排列数组
 * @param {number} target - 目标值（需查找或确定插入位置）
 * @return {number} - 若目标值存在则返回索引，否则返回插入位置
 */
var searchInsert = function (nums, target) {
  // 初始化边界：左边界从 0 开始，右边界为数组长度（因右开，刚好覆盖所有元素：0 ≤ index < nums.length）
  let left = 0, right = nums.length;

  // 循环条件：当 left < right 时，区间 [left, right) 仍有元素可查
  // 若 left === right，说明区间为空（无元素可查），循环终止
  while (left < right) {
    // 计算中间位置
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      // 中间值大于目标值 → 目标值一定在 mid 左侧，收缩右边界（保持右开，mid 位置不包含在新区间）
      right = mid;
    } else if (nums[mid] < target) {
      // 中间值小于目标值 → 目标值一定在 mid 右侧，收缩左边界（mid 及左侧元素可排除）
      left = mid + 1;
    } else {
      // 中间值等于目标值 → 找到目标，直接返回索引
      return mid;
    }
  }

  // 循环结束时：left === right，此时位置即为插入位置
  // 原因：left 左侧的所有元素（< left）都小于 target，left 及右侧元素（≥ left）都大于 target
  return left;
};