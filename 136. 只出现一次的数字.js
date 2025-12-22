/**
 * 核心原理：利用异或运算的特性
 * 1. 任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0 = a
 * 2. 任何数和其自身做异或运算，结果是 0，即 a ^ a = 0
 * 3. 异或运算满足交换律和结合律，即 a ^ b ^ a = b ^ (a ^ a) = b ^ 0 = b
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //
  for (let i = 1; i < nums.length; i++) {
    nums[0] ^= nums[i];
  }
  return nums[0];
};