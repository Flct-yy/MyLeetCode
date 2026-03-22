function searchMatrix_1(matrix: number[][], target: number): boolean {
  if (!matrix || !matrix[0]) {
    return false;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let low = 0, high = m * n - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let x = matrix[Math.floor(mid / n)][mid % n];
    if (x < target) {
      low = mid + 1;
    } else if (x > target) {
      high = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

function searchMatrix_2(matrix: number[][], target: number): boolean {
  if (!matrix || !matrix[0]) {
    return false;
  }
  const m = matrix.length;
  const n = matrix[0].length;

  const searchRow = (): number => {
    let low = 0, high = m - 1;
    let targetRow = -1;
    while (low <= high) {
      const mid = Math.floor((high + low) / 2);
      if (matrix[mid][0] <= target) {
        low = mid + 1;
        targetRow = mid;
      } else if (matrix[mid][0] > target) {
        high = mid - 1;
      }
    }
    return targetRow;
  }
  const row = searchRow();
  if (row === -1) {
    return false;
  }
  const searchCol = (): boolean => {
    let low = 0, high = n - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (matrix[row][mid] < target) {
        low = mid + 1;
      } else if (matrix[row][mid] > target) {
        high = mid - 1;
      }
      else {
        return true;
      }
    }
    return false;
  }

  return searchCol();
};