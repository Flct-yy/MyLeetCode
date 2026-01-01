function removeDuplicates(nums: number[]): number {
  // 思路:和 删除有序数组中的重复项 I 一样 判断条件改变一下
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] === nums[slow]) {
      if (nums[slow] !== nums[slow - 1]) {
        nums[++slow] = nums[fast];
      }
    } else {
      nums[++slow] = nums[fast];
    }
  }
  return slow + 1;
};