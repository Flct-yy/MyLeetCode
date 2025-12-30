function removeDuplicates(nums: number[]): number {
  // 因为是递增数组 所以这个直接用快慢指针 把判断语句修改一下即可
  let slow: number = 0;
  for (let fast: number = 0; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast];
  }
  // 注意 slow 表示的是结果数组最后一个元素的索引
  return slow + 1;
}; 