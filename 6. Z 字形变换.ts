function convert_1(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const sL = s.length;
  const groupNum = (numRows - 1) * 2;
  let res = '';
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < Math.ceil(sL / groupNum); j++) {
      if (i + j * groupNum >= sL) break;
      res += s[i + j * groupNum]
      if (groupNum - i + j * groupNum >= sL) break;
      if (i > 0 && i < numRows - 1) {
        res += s[groupNum - i + j * groupNum]
      }
    }
  }
  return res;
};


function convert_2(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows: string[] = new Array(numRows).fill('');
  const cycleLen = 2 * (numRows - 1); // 周期长度
  let currentRow = 0;
  let step = -1; // 方向：-1表示向上，1表示向下

  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      step = -step;
    }
    currentRow += step;
  }
  return rows.join('');
};