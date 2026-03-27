function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len1:number = nums1.length;
  const len2:number = nums2.length;
  const totalLen:number = len1 + len2;
  const medianIndex:number = Math.floor((totalLen + 1) / 2);
  let offset1 = 0;
  let offset2 = 0;
  let leftMax = -Infinity;
  while (offset1 + offset2 < medianIndex) {
    let k = medianIndex - offset1 - offset2;
    k = Math.max(1, Math.floor(k / 2));
    let left1 = offset1 + k - 1;
    let left2 = offset2 + k - 1;

    let val1 = left1 < len1 ? nums1[left1] : Infinity;
    let val2 = left2 < len2 ? nums2[left2] : Infinity;

    if (val1 > val2) {
      leftMax = Math.max(leftMax, val2);
      offset2 += k;
    } else if (val1 < val2) {
      leftMax = Math.max(leftMax, val1);
      offset1 += k;
    } else {
      leftMax = val1;
      offset1 += k;
      offset2 += k;
    }
  }

  if (totalLen % 2 === 0) {
    // 新增：两数组均遍历完，右半最小值等于左半最大值（所有元素已处理）
    if (offset1 === len1 && offset2 === len2) {
      return leftMax; // 此时leftMax就是中间值，两数平均后仍等于leftMax
    }
    if (offset1 === len1) {
      return (leftMax + nums2[offset2]) / 2;
    }
    if (offset2 === len2) {
      return (leftMax + nums1[offset1]) / 2;
    }
    return (leftMax + Math.min(nums1[offset1], nums2[offset2])) / 2;
  } else {
    return leftMax;
  }
};