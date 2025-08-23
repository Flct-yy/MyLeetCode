/**
 * 抽取最后一个元素 放到前面
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // O(N*K)
  for(let i = 0; i < k; i++) {
    // pop 删除数组最后一个元素 减少数组长度 返回删除的元素
    const last = nums.pop();
    // 执行一次循环 使旧数组往后移动 新数组 添加进去 长度累加
    nums.unshift(last);
  }
  return nums;
};

/**
 * 使用反转 将整个数组反转后 分别将前k元素反转 剩余元素反转
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // O(N)
  // 当 k 值大于 数组长度时 取余数 
  k = k % nums.length; 
  // 反转整个数组
  nums.reverse();
  // 反转前 k 个元素
  reverse(nums, 0, k - 1);
  // 反转后面的元素
  reverse(nums, k, nums.length - 1);
  return nums;
};

function reverse(nums, start, end) {
  while(start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};