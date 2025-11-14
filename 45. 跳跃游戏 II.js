/**
 * 反向查找出发位置（从终点向起点倒推）
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let position = nums.length - 1;
  let steps = 0;
  // 每次都往前取最远的值（因为题目保证一定是可以到达的）
  while (position > 0) {
    // 从左向右找能一步到达target的最左位置
    for (let i = 0; i < position; i++) {
      if (nums[i] + i >= position) {
        position = i;
        steps++;
        break;
      }
    }
  }
  return steps;
};

/**
 * 正向查找可到达的最大位置，每次找到可到达的最远位置
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const numsLen = nums.length;
  // end 当前「跳跃区间」的终点
  let end = 0;
  // maxPosition 当前能到达的最远位置
  let maxPosition = 0;
  // steps 已使用的跳跃步数。
  let steps = 0;
  for (let i = 0; i < numsLen - 1; i++) {
    // 每次计算的是 上一个「跳跃区间」的终点 和 当前「跳跃区间」的终点之间 的元素能到达的最远距离
    maxPosition = Math.max(maxPosition, nums[i] + i);
    // 当i===end表示到达边界
    if (i === end) {
      // 修改边界为 上一个「跳跃区间」的终点 和 当前「跳跃区间」的终点之间的元素能到达的最远距离
      end = maxPosition;
      // 步数+1
      steps++;
    }
    // 提前退出：如果已能覆盖终点，无需继续循环
    if (end >= numsLen - 1) break;
  }
  //返回步数
  return steps;
};