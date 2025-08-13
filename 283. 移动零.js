/**
 * 找到下一个非零元素与该零元素进行交换
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //判断是否为空数组
    if(nums.length===0) return[];
    let i = 0;
    for(let j = 0; j<nums.length; j++){

        //找到第一个非零元素
        while(nums[j]===0){
            //判断i是否为非零元素，如果是，则交换
            if(i > j&&nums[i]!==0){
                [nums[j],nums[i]] = [nums[i],nums[j]]
            }
            i++;
            //判断i是否越界，如果越界，则说明已经遍历完所有元素，则直接返回
            if(i>=nums.length) return nums;
        }
    }
};

/**
 * 遍历所有非零元素放到前面
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 指向当前非零元素应该放置的位置 也就是所有非零元素的最后一个(边界)
    let lastNonZero = 0; 
    for (let i = 0; i < nums.length; i++) {
        // 找到第一个非零元素
        if (nums[i] !== 0) {
            // 将非零元素交换到前面
            [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
            //边界加 1
            lastNonZero++;
        }
    }
};