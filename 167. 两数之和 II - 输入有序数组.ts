function twoSum(numbers: number[], target: number): number[] {
  const nL = numbers.length;
  let leftPoint = 0;
  let rightPoint = nL - 1;
  while (leftPoint < rightPoint) {
    const sum = numbers[rightPoint] + numbers[leftPoint];
    if (target > sum) {
      leftPoint++;
    } else if (target < sum) {
      rightPoint--;
    } else {
      return [leftPoint + 1, rightPoint + 1];
    }
  }
  return [-1, -1];
};