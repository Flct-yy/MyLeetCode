function removeElement_1(nums: number[], val: number): number {
  // 思路：把nums分为 两个部分 [0,k-1] 和 [k,nums.length-1] 用两个指针维护这两个部分
  // p1 用来维护 第一部分 [0,k)
  // p2 用来维护 第二部分 (k-1,num.length-1]
  let p1 = 0, p2 = nums.length - 1;
  while (p1 <= p2) {
    if (nums[p1] === val) {
      while (p1 <= p2 && nums[p2] === val) {
        p2--;
      }
      // 若p1 > p2，说明所有剩余元素都是val，直接退出
      if (p1 > p2) break;
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p2--;
    }
    p1++;
  }

  //  因为最后 当遍历完毕时 p1会+1 所以直接返回即可
  return p1;
};


function removeElement_2(nums: number[], val: number): number {
  // 发现维护太麻烦
  let slow = 0; // 慢指针：有效元素的末尾下标+1
  // 快指针遍历数组，找非val元素
  for (let fast = 0; fast < nums.length; fast++) {
    // 非val元素 → 放到慢指针位置，慢指针右移
    if (nums[fast] !== val) nums[slow++] = nums[fast];
  }
  return slow;
};