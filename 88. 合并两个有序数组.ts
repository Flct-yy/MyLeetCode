/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge_1(nums1: number[], m: number, nums2: number[], n: number): void {
  // 思路：两个指针从前往后分别维护nums1和nums2
  let pointer1: number = 0, pointer2: number = 0;
  // 因为 nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0
  // 所以 m + pointer2 表示nums1的有效长度
  while (pointer1 < m + pointer2 && pointer2 < n) {
    if (nums1[pointer1] <= nums2[pointer2]) {
      pointer1++;
    } else {
      for (let i = m + pointer2; i > pointer1; i--) {
        nums1[i] = nums1[i - 1];
      }
      nums1[pointer1] = nums2[pointer2];
      pointer1++;
      pointer2++;
    }
  }
  if (pointer2 < n) {
    // 表示num2还没有合并完
    // 此时pointer1和pointer2 表示没有合并的第一个元素
    // n - pointer2表示nums2剩下几个没合并
    for (let i = 0; i < n - pointer2; i++) {
      nums1[pointer1 + i] = nums2[pointer2 + i];
    }
  }
};

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge_2(nums1: number[], m: number, nums2: number[], n: number): void {
  // 思路：从后往前遍历 相当于从大到小排序 可以避免元素后移

  // pointer1 表示 nums1 有效元素的最后一位指针
  // pointer2 表示 nums2 有效元素的最后一位指针
  // pointer 表示 nums1 最终填充的最后一位指针
  let pointer1: number = m - 1, pointer2: number = n - 1, pointer = m + n - 1;

  //只要nums2没有执行完就一直执行
  while (pointer2 >= 0) {
    if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
      nums1[pointer] = nums1[pointer1];
      pointer1--;
    } else {
      // 当 pointer1 不是有效值 或 pointer1指向的值 <= pointer2指向的值
      nums1[pointer] = nums2[pointer2];
      pointer2--;
    }
    // 每次执行都放入一个元素
    pointer--;
  }
};