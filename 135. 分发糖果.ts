function candy(ratings: number[]): number {
  let rL = ratings.length;
  if (rL === 0) return 0;
  const candies = new Array(rL).fill(1);
  for (let i = 1; i < rL; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  for (let i = rL - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  return candies.reduce((sum, num) => sum + num, 0);
};