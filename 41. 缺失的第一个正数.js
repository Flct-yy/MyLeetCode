/**
 * 因为 排序 + 遍历 时间复杂度都为 O(nlogn) 所以不适合用在此题。
 * 因此，我们需要使用哈希表来解决此题。
 * 我们遍历数组 nums，对于每个元素 x，我们将其作为键，将其在数组中的下标作为值，存入哈希表中。
 * 然后，我们遍历数组 nums，对于每个元素 x，如果 x 不在哈希表中，则说明它是缺失的第一个正数，返回 x。
 * 时间复杂度为 O(n)，空间复杂度为 O(n)。
 * 空间度不符合
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    const hash = {};

    // 将所有正数存入集合
    for (let i = 0; i < n; i++) {
        const x = nums[i];
        if (x > 0) {
            hash[x] = i;
        }
    }

    // 遍历数组，查找第一个缺失的正数
    for (let i = 1; i <= n; i++) {
      // 当数组中有负数时,由于 n 是长度 所以也能找到第一个缺失的正数
      //只有当数组是从 1 开始时一直连续时才会出现找不到缺失的正数的情况
      if (hash[i] === undefined) {
        return i;
      }
    }

    // 如果数组中全是正数，则返回 n+1
    return n + 1;
};


/**
 * 优化空间复杂度
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    // 第一次遍历：将每个正数放到正确的位置上
    for(let i = 0;i < n;i++){
      // 跳过负数和 0

      // while 循环保证 nums[i] 指向正确的位置
      // 因为 交换后 nums[i] 是新的值 所以继续判断 是否需要继续交换
      // 直到 nums[i] 指向正确的位置
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
        // 交换 nums[i] 和 nums[nums[i] - 1]
        const temp = nums[nums[i] - 1];
        nums[nums[i] - 1] = nums[i];
        nums[i] = temp;
      }
    }

    // 第二次遍历：找到第一个位置不匹配的数
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    // 如果所有位置都正确，返回 n + 1
    return n + 1;

};