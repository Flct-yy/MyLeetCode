/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const numsLen = nums.length;

  function backtrack(start, arr) {
    // 关键：每一步的路径都是一个子集，直接加入结果集
    res.push([...arr]) // 深拷贝，避免后续修改覆盖

    // 遍历选择列表：从 start 开始，避免重复选择（如选1后只选2、3）
    for (let i = start; i < numsLen; i++) {
      // 1. 选择：将当前元素加入路径
      // push() 方法用于在数组的末尾添加一个或多个元素，并返回该数组的新长度。
      arr.push(nums[i]);
      // 2. 递归：探索下一层，起始索引设为 i+1（只能选后面的元素）
      // 注意：这里的 i 要加 1，因为当前元素已经被加入路径，下一轮递归的起始索引要从 i+1 开始
      backtrack(i + 1, arr)
      // 3. 回溯：撤销选择，恢复路径状态（供下一轮遍历）
      // pop() 方法用于移除数组的最后一个元素，并返回该元素的值。
      arr.pop();
    }
  }

  // 启动递归
  backtrack(0, [])

  return res;
};