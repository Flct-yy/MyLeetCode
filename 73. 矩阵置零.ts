/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  if (!matrix || !matrix.length || !matrix[0] || !matrix[0].length) return;

  const row = matrix.length;
  const col = matrix[0].length;
  const zeroRow = new Array(row);
  const zeroCol = new Array(col);

  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      if (matrix[m][n] === 0) {
        zeroRow[m] = 0;
        zeroCol[n] = 0;
      }
    }
  }

  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      if (zeroRow[m] === 0 || zeroCol[n] === 0) {
        matrix[m][n] = 0;
      }
    }
  }
};