/**
 * 对象 哈希表
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 创建哈希表(存储键值对) 哈希表存储数字和索引的映射
    let map = {};

    //每次遍历一个数,如果 map 中没有就存储进map
    for(let i = 0; i < nums.length; i++) {

        //计算差值
        let complement = target - nums[i];

        // 检验是否存在于哈希表中
        if(map[complement] !== undefined) {
            // 返回 差值索引 和 当前索引
            return [map[complement], i];
        }

        //没有 就存储进哈希表
        map[nums[i]] = i;
    }
    return [];
};


/**
 * Map 结构
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 创建哈希表(存储键值对) 哈希表存储数字和索引的映射
    const map = new Map();

    //每次遍历一个数,如果 map 中没有就存储进map
    for(let i = 0; i < nums.length; i++) {

        //计算差值
        let complement = target - nums[i];

        // 检验是否存在于哈希表中
        if(map.get(complement) !== undefined) {
            // 返回 差值索引 和 当前索引
            return [map.get(complement), i];
        }

        //没有 就存储进哈希表
        map.set(nums[i],i);
    }
    return [];
};