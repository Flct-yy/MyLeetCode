/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 从下标为 0 出发，根据 f(n) 计算出一个值，
  // 以这个值为新的下标，再用这个函数计算，以此类推产生一个类似链表一样的序列
  // 数组中如果有重复的数，那么就会产生多对一的映射，这样，形成的链表就一定会有环路了
  // 找到数组中的重复整数 <==> 找到链表的环入口

  // 快慢指针找相遇点（证明链表存在环路）
  let slow = 0, fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  // 找环的入口（入口即为重复数）
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  
  // 相遇时的位置就是环的入口，即数组中的重复数
  return slow;
};