/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 从小到大 排序 去重 res不用索引
  nums.sort((a,b)=>a-b);

  const res=[];

  // i<nums.length-2 因为至少需要3个数
  for(let i = 0;i<nums.length-2;i++){
    // nums[i]是否重复
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    if (nums[i] > 0) break;

    //left从i+1开始(从0开始可能重复)，right从数组末尾开始
    let left=i + 1,right=nums.length-1;
    while(left<right){
      const sum = nums[left] + nums[right] + nums[i];

      if(sum === 0){
        res.push([nums[i],nums[left],nums[right]]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        // 继续下一轮
        left++;
        right--;
      }else if(sum<0){
        // 如果和小于0，左指针右移 变大
        left++;
      }else{
        // 如果和大于0，右指针左移 变小
        right--;
      }

    }
  }
  return res;
};