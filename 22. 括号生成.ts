function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  const dfs = (openCount: number, balance: number, currentStr: string) => {
    if (openCount === n && balance === 0) {
      res.push(currentStr);
      return;
    }
    if (openCount < n) {
      dfs(openCount + 1, balance + 1, currentStr + '(');
    }
    if (balance > 0) {
      dfs(openCount, balance - 1, currentStr + ')');
    }
  }

  dfs(0, 0, '');
  return res;
};