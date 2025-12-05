/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const numsLen = nums.length;
  // 总数量少于2个不可分 返回false
  if (numsLen < 2) return false;
  let numsSum = 0;
  let maxNum = 0;
  // 遍历数组，计算总和与最大值
  for (let i = 0; i < numsLen; i++) {
    numsSum += nums[i];
    maxNum = Math.max(maxNum, nums[i]);
  }

  // 总数是奇数 则不可分 直接返回false
  if (numsSum % 2 !== 0) return false;

  const targetNum = numsSum / 2;
  // 如果最大的数大于总数的一般 则直接返回false
  if (maxNum > targetNum) return false

  // dp[i][j] 表示从数组的 [0,i] 下标范围内选取若干个正整数（可以是 0 个），是否存在一种选取方案使得被选取的正整数的和等于 j。
  const dp = new Array(numsLen).fill(0).map(() => new Array(targetNum + 1).fill(false));

  // 不选取任何正整数，则被选取的正整数之和等于 0  第一排为true
  for (let i = 0; i < numsLen; i++) {
    dp[i][0] = true;
  }

  // 遍历数组从第二个元素开始（i从1到numsLen-1）
  for (let i = 1; i < numsLen; i++) {
    // 当前位置的值
    const num = nums[i];
    for (let j = 0; j <= targetNum; j++) {
      // 情况1：当前元素值大于目标和j，无法选取该元素，继承上一行的结果
      if (num > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 情况2：当前元素值小于等于j，有两种选择：
        //    不选当前元素：结果 = dp[i-1][j]（上一行同一列）
        //    选当前元素：结果 = dp[i-1][j-num]（上一行j-num列，凑出剩余和）
        // 逻辑或：只要其中一种选择成立，当前dp[i][j]就成立
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
      }
    }
  }

  return dp[numsLen - 1][targetNum];
};