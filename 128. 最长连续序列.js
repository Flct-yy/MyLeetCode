/**
 * Map
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = new Map();
    let maxLen = 0;
    
    // 遍历每个数
    for(const num of nums){
        // 如果该数已经在map中，则跳过
        if (map.has(num)) continue;

        // 计算当前数的左右两侧的连续序列长度
        const left = map.get(num-1)||0;
        const right = map.get(num+1)||0;
        const currentLen = left + right + 1;

        // 更新map
        map.set(num,currentLen);

        // 更新左右两侧的连续序列长度
        // 当处理到链接问题,如果不更新边界, 则边界相邻的数获取不到正确的连续序列长度
        if(right>0) map.set(num+right,currentLen);
        if(left>0) map.set(num-left,currentLen);

        // 更新最大长度
        maxLen = Math.max(maxLen,currentLen);
    }
    return maxLen;
};