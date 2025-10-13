/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // res 存放结果
  const res = [];
  // used 标记是否使用过
  const used = new Array(nums.length).fill(false);

  function backtrack(path) {
    // 如果路径长度等于 nums.length，说明找到了一个结果
    if (path.length === nums.length) {
      // slice() 方法返回一个新的数组对象 原来的数组不会被改变
      res.push(path.slice());
      return;
    }

    // 枚举所有值
    for (let i = 0; i < nums.length; i++) {
      // 如果已经使用过，则跳过
      if (used[i]) continue;

      // 标记为已使用
      used[i] = true;
      path.push(nums[i]);

      // 递归
      backtrack(path);

      // 回溯 标记为未使用
      used[i] = false;
      path.pop();
    }
  }

  backtrack([]);

  return res;
};