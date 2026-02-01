/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate_1(matrix: number[][]): void {
  const side = matrix.length;
  if (side === 1) return;
  const laps = Math.floor(side / 2);

  for (let lap = 0; lap < laps; lap++) {
    const start = lap;
    const end = side - lap - 1;
    for (let index = start; index < end; index++) {
      let nextVal = matrix[lap][index];
      for (let i = 1; i < 5; i++) {
        let curX = -1, curY = -1;
        switch (i) {
          case 1:
            curX = index;
            curY = end;
            break;
          case 2:
            curX = end;
            curY = side - 1 - index;
            break;
          case 3:
            curX = side - 1 - index;
            curY = lap;
            break;
          case 4:
            curX = lap;
            curY = index;
            break;
        }

        const temp = matrix[curX][curY];
        matrix[curX][curY] = nextVal;
        nextVal = temp;
      }
    }
  }
};


/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate_2(matrix: number[][]): void {
  const side = matrix.length;
  if (side === 1) return;
  const laps = Math.floor(side / 2);

  for (let lap = 0; lap < laps; lap++) {
    const start = lap;
    const end = side - lap - 1;
    for (let index = start; index < end; index++) {
      // 保存当前位置的初始值（顶部边）
      const tempTop = matrix[start][index];
      
      // 1. 左侧边 -> 顶部边（对应位置）
      matrix[start][index] = matrix[side - 1 - index][start];
      
      // 2. 底部边 -> 左侧边（对应位置）
      matrix[side - 1 - index][start] = matrix[end][side - 1 - index];
      
      // 3. 右侧边 -> 底部边（对应位置）
      matrix[end][side - 1 - index] = matrix[index][end];
      
      // 4. 顶部边初始值 -> 右侧边（对应位置）
      matrix[index][end] = tempTop;
    }
  }
}