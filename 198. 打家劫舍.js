/**
 * 当前位置的最大金额 取 (偷当前位置 + 上一个不相邻位置时能到达的最大金额) 和 (不偷当前位置 上一个相邻位置时能到达的最大金额) 的最大值
* @param {number[]} nums
* @return {number}
*/
var rob = function (nums) {
  const numsLen = nums.length;

  // 处理边界情况
  // 因为下面要访问 0 和 1 位置 所以要判断一下是否存在元素
  if (numsLen === 0) return 0;
  if (numsLen === 1) return nums[0];

  // 初始化 两个指针
  // first 代表 dp[i-2]，即到第 i-2 户时能偷窃到的最大金额
  // second 代表 dp[i-1]，即到第 i-1 户时能偷窃到的最大金额
  let first = nums[0], second = Math.max(nums[0], nums[1]);

  //从第3个元素开始遍历
  for (let i = 2; i < numsLen; i++) {
    let temp = second
    // 计算 dp[i]：到第 i 户时能偷窃到的最大金额
    second = Math.max(nums[i] + first, second);
    first = temp;
  }

  // 循环结束后，second 存储的就是 dp[numsLen - 1]，即到最后一户时能偷窃到的最大金额
  return second;
};