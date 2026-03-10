function combine(n: number, k: number): number[][] {
  const res: number[][] = [];

  const dfs = (cur: number, n: number, k: number, arr: number[]) => {
    // 优先判断：组合长度达标，直接存入
    if (arr.length === k) {
      res.push([...arr]);
      return;
    }
    // 剪枝：剩余数字不够凑k个，提前返回
    if (arr.length + (n - cur + 1) < k) {
      return;
    }
    // 最后判断：越界则终止（此时组合已判断过，不会漏掉n）
    if (cur > n) {
      return;
    }

    dfs(cur + 1, n, k, [...arr, cur]);
    dfs(cur + 1, n, k, arr);
  }

  dfs(1, n, k, []);
  return res;
};