function insert_1(intervals: number[][], newInterval: number[]): number[][] {
  if(!intervals.length){
    return [newInterval];
  }
  const res: number[][] = [];
  let i = 0;
  // 与newInterval完全不相干的放入res
  while (intervals[i] && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }
  if(!intervals[i]){
    res.push(newInterval);
    return res;
  }
  // 与newInterval相干的处理
  if (intervals[i][0] > newInterval[1]) {
    res.push(newInterval);
    res.push(intervals[i]);
  } else {
    res.push([Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]);
  }
  i++;
  while (i < intervals.length) {
    const end = res[res.length - 1];
    if (intervals[i][0] > end[1]){
      res.push(intervals[i]);
    }else{
      end[1] = Math.max(end[1], intervals[i][1]);
      res.pop();
      res.push(end);
    }
    i++;
  }
  return res;
};

function insert_2(intervals: number[][], newInterval: number[]): number[][] {
  const res: number[][] = [];
  let i = 0;
  const n = intervals.length;

  // 1. 先把所有在newInterval左边且不重叠的区间加入结果
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  // 2. 合并所有与newInterval重叠的区间
  while (i < n && intervals[i][0] <= newInterval[1]) {
    // 直接更新newInterval的边界，无需频繁操作结果数组
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // 3. 将合并后的新区间加入结果
  res.push(newInterval);

  // 4. 把剩余在newInterval右边且不重叠的区间加入结果
  while (i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
}