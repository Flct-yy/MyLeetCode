/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const totalLen = len1 + len2;
  // 左半部分需要的元素总数（奇数时左半多1个，最大值即中位数）
  const leftTotal = Math.floor((totalLen + 1) / 2);
  let offset1 = 0;
  let offset2 = 0;
  // 记录左半部分的最大值
  let leftMax = -Infinity;
  while (offset1 + offset2 < leftTotal) {
    // 剩余需要排除的元素数
    let remaining = leftTotal - offset1 - offset2;
    // 当 remaning 为 1 时, Math.floor(remaining / 2) 可能为 0, 会导致 一直为 0 (死循环);
    let k = Math.max(1, Math.floor(remaining / 2));
    // 计算候选位置（减1是为了取“第k个元素”的索引，避免越界）
    const pos1 = offset1 + k - 1;
    const pos2 = offset2 + k - 1;
    // 处理越界：数组已遍历完时，候选值设为无穷大（表示无法再排除该数组元素）
    // 当有数组已经遍历完时,另一个数组可以直接加 k 因为距离中位数还有 remaining(大概是2k) 个元素  已经遍历完的数组如果直接按全部来走(小于k步) 另一个数组走的步数肯定大于k步
    // 所以直接取正无穷即可
    const val1 = pos1 < len1 ? nums1[pos1] : Infinity;
    const val2 = pos2 < len2 ? nums2[pos2] : Infinity;

    // 排除较小的一半元素，并更新左半部分最大值
    if (val1 < val2) {
      leftMax = Math.max(leftMax, val1);
      offset1 += k; // 排除nums1的前k个元素
    } else {
      leftMax = Math.max(leftMax, val2);
      offset2 += k; // 排除nums2的前k个元素
    }
  }

  // 情况1：总长度为奇数 → 左半部分最大值就是中位数
  if (totalLen % 2 === 1) {
    return leftMax;
  }

  // 情况2：总长度为偶数 → 需取左半最大 + 右半最小的平均值
  // 右半部分的第一个元素（即两数组当前指针指向的元素，处理越界）
  const rightVal1 = offset1 < len1 ? nums1[offset1] : Infinity;
  const rightVal2 = offset2 < len2 ? nums2[offset2] : Infinity;
  const rightMin = Math.min(rightVal1, rightVal2);

  return (leftMax + rightMin) / 2;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const totalLen = len1 + len2;
  const medianIndex = Math.floor((totalLen + 1) / 2);
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