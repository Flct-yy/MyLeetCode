/**
 * 超出时间限制
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    
  let left = 1 , right = k;
  let maxNum = nums[0], maxIndex = 0;
  const res = [];
  for(let i = 0;i<k;i++){

    maxNum = Math.max(maxNum,nums[i]);
  }
  res.push(maxNum);

  while(right<nums.length){
    if(nums[left-1]===maxNum){
      maxNum = nums[left];
      for(let i = left;i<left + k;i++){
        maxNum = Math.max(maxNum,nums[i]);
      }
      res.push(maxNum);
    }else{
      maxNum = Math.max(maxNum,nums[right]);
      res.push(maxNum);
    }
    left++;
    right++;
  }

  return res;
};

/**
 * 优化
 * 维护一个双端队列，队列中存储的是数组元素的索引，且队列中的索引对应的元素值是单调递减的。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = []; // 存储的是索引
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        // 移除队列中不在窗口范围内的索引
        // 索引是严格递增的 (i从 0 到 nums.length - 1)
        //又因为只移动一格 所以 只需要判断 deque[0] 即可
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // 从队列尾部移除所有小于当前元素的索引
        // <=加等号32ms 不加426ms
        // <=时  相等的元素 时也会弹出队尾元素，导致队列中存储的索引更少，减少了后续比较的次数。
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
          // 删除最后一个元素并返回该元素
            deque.pop();
        }
        
        // 将当前索引加入队列
        deque.push(i);
        
        // 当窗口完全覆盖时，记录最大值
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }
    
    return res;
};