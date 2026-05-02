function isInterleave(s1: string, s2: string, s3: string): boolean {
  const l1: number = s1.length;
  const l2: number = s2.length;
  const l3: number = s3.length;

  if (l1 + l2 != l3) {
    return false;
  }

  const dp: boolean[][] = Array.from({ length: l1 + 1 }, () => new Array(l2 + 1).fill(false))
  dp[0][0] = true;

  for (let i = 0; i <= l1; i++) {
    for (let j = 0; j <= l2; j++) {
      const p = i + j - 1;
      if (i > 0) {
        dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[p]) || dp[i][j];
      }
      if (j > 0) {
        dp[i][j] = (dp[i][j - 1] && s2[j - 1] === s3[p]) || dp[i][j];
      }
    }
  }

  return dp[l1][l2];
};