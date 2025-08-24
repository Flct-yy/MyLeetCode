/**
 * 将前缀和后缀分别算出来 并存储
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const prefix = new Array(n);
    const suffix = new Array(n);
    const answer = new Array(n);

    // 计算前缀乘积
    prefix[0] = 1;
    for(let i = 1;i<n;i++){
      prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // 计算后缀乘积
    suffix[n - 1] = 1;
    for(let i = n - 2;i>=0;i--){
      suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    for(let i = 0;i < n;i++){
      answer[i] = prefix[i] * suffix[i];
    }

    return answer;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
        const n = nums.length;
    const answer = new Array(n);
    
    // 先用 answer 数组存储前缀乘积
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    
    // 用一个变量动态计算后缀乘积，同时更新结果
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * suffix;
        suffix = suffix * nums[i];
    }
    
    return answer;
};