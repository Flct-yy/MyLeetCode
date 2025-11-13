/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 记录当前能够到达的最远位置索引
  let maxReach = 0;
  // 遍历数组中的每个位置
  for (let i = 0; i < nums.length; i++) {
    // 若当前位置i已经超过了能到达的最远位置maxReach，说明无法到达该位置
    // 也就不可能继续前进到终点，直接返回false
    if (i > maxReach) return false;
    // 更新最远可达位置：取当前maxReach和"当前位置i+从i能跳的最大长度nums[i]"的较大值
    // 这一步体现贪心思想：始终保持对最远可达范围的追踪
    maxReach = Math.max(maxReach, nums[i] + i);
  }
  return maxReach >= nums.length - 1;
};