function search(nums: number[], target: number): number {
    const n = nums.length;
    if (n === 0) {
        return -1;
    }
    if (n === 1) {
        return nums[0] === target ? 0 : -1;
    }
    // 初始化双指针
    let l = 0, r = n - 1;
    // 二分查找循环
    while (l <= r) {
        const mid = Math.floor((l + r) / 2); // TS中需手动取整，避免浮点数
        // 找到目标值，直接返回下标
        if (nums[mid] === target) {
            return mid;
        }
        // 情况1：mid左侧是升序区间
        if (nums[0] <= nums[mid]) {
            // 判断target是否在左侧升序区间内
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            // 情况2：mid右侧是升序区间
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    // 循环结束未找到目标值
    return -1;
}
    