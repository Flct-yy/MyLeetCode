/**
 * a < c < b < d 或 c < a < d < b 或 a < c < d < b 或 c < a < b < d。 即 重叠
 * 一个区间的起点位于另一个区间之内。
 * 两个区间 [a, b] 和 [c, d] 存在重叠的条件是：a <= d 且 c <= b。
 * 
 * 两个区间重叠，合并后的新区间是 [min(a, c), max(b, d)]。
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 先按起始点排序  可能重叠的区间都相邻
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = intervals[0];
  let res = [];
  for(let i = 1;i < intervals.length;i++){
    const temp = intervals[i];
    // 因为排序了 所以 merged[0] <= temp[0]  只需要判断 temp[0]是否 <= merged[1]
    if(temp[0] <= merged[1]){
      merged = [Math.min(temp[0],merged[0]),Math.max(temp[1],merged[1])]
    }else {
      res.push(merged);
      merged = temp
    }
  }

  // 最后一个区间也要添加到结果中
  res.push(merged);

  return res;
    
};


/**
 * 优化
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    
    // 按起始点排序
    intervals.sort((a, b) => a[0] - b[0]);
    
    const res = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
      // 获取结果数组中最后一个区间
      const last = res[res.length - 1];
      const current = intervals[i];
      
      // 判断是否重叠
      if (current[0] <= last[1]) {
          // 优化：直接修改终点，避免创建新数组
          // 因为数组res 存储的是引用，所以修改last[1] 也会修改 res[i-1]
          last[1] = Math.max(last[1], current[1]);
      } else {
          res.push(current);
      }
    }
    
    return res;
};