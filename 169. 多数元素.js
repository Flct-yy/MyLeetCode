/**
 * Boyer-Moore 投票
 * 核心原理：
 * 1. 题目中“多数元素（众数）”的定义是出现次数超过数组长度一半的元素
 * 2. 若将众数记为 +1 票，其他数记为 −1 票，所有数的票数总和必然 > 0
 * 3. 非众数会与众数/其他非众数两两抵消，因多数元素占比超一半，最终剩下的候选一定是众数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // count 表示当前候选元素的净票数 永远不可能是负数
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    // 核心条件：当净票数为0时，重置候选元素
    //    含义：前序所有元素的投票已完全抵消（支持票=反对票），旧候选失去意义
    //    此时剩余数组的多数元素，与原数组的多数元素是同一个，因此重新选当前元素为新候选
    if (count === 0) {
      candidate = num;
    }
    // 投票逻辑：更新净票数
    //    - 如果当前数等于候选元素：投支持票，count+1
    //    - 如果当前数不等于候选元素：投反对票，count-1
    //    本质是「不同元素两两抵消」的核心逻辑
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
};