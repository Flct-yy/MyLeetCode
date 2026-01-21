function canCompleteCircuit_1(gas: number[], cost: number[]): number {
  const nodeL = gas.length;
  let gasSum = 0;
  let costSum = 0;
  const mayIndex = [];
  for (let i = 0; i < nodeL; i++) {
    gasSum += gas[i];
    costSum += cost[i];
    if (gas[i] >= cost[i]) {
      mayIndex.push(i);
    }
  }
  if (costSum > gasSum) return -1;


  // 第二步：逐个验证候选起点
  for (const start of mayIndex) {
    let currentGas = 0;
    let currentIndex = start;
    let canComplete = true;

    // 绕一圈，共n个节点
    for (let j = 0; j < nodeL; j++) {
      // 加上当前加油站的油量
      currentGas += gas[currentIndex];
      // 减去前往下一个加油站的消耗
      currentGas -= cost[currentIndex];
      
      // 油量不足，无法继续，该起点无效
      if (currentGas < 0) {
        canComplete = false;
        break;
      }

      // 移动到下一个加油站（循环）
      currentIndex = (currentIndex + 1) % nodeL;
    }

    // 验证通过，返回该起点
    if (canComplete) {
      return start;
    }
  }
  return -1;
};


function canCompleteCircuit_2(gas: number[], cost: number[]): number {
  const n = gas.length;
  let totalGas = 0; // 总累计油量（gas[i]-cost[i]的总和）
  let currentGas = 0; // 当前累计油量
  let start = 0; // 候选起点

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    totalGas += diff;
    currentGas += diff;

    // 关键贪心逻辑：当前累计油量不足，说明从start到i都不是有效起点
    if (currentGas < 0) {
      start = i + 1; // 起点更新为下一个节点
      currentGas = 0; // 重置当前累计油量
    }
  }

  // 总油量不足则无解，否则返回记录的起点
  return totalGas >= 0 ? start : -1;
}
