function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (const interval of intervals) {
    if(result.length === 0){
      result.push(interval);
    }
    const lastInterval = result[result.length - 1];
    if (interval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
    } else {
      result.push(interval);
    }
  }
  return result;
};