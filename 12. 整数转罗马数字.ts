function intToRoman_1(num: number): string {
  const oneNum = Math.floor(num % 10);
  const tenNum = Math.floor((num % 100) / 10);
  const hundredNum = Math.floor((num % 1000) / 100);
  const thousandNum = Math.floor(num / 1000);
  let res = '';
  for (let i = 0; i < thousandNum; i++) {
    res += 'M';
  }
  for (let i = hundredNum; i > 0;) {
    if (i === 9) {
      res += 'CM'
      i -= 9;
      continue;
    }
    if (i >= 5) {
      res += 'D'
      i -= 5;
      continue;
    }
    if (i === 4) {
      res += 'CD'
      i -= 4;
      continue;
    }
    res += 'C';
    i--;
  }

  for (let i = tenNum; i > 0;) {
    if (i === 9) {
      res += 'XC'
      i -= 9;
      continue;
    }
    if (i >= 5) {
      res += 'L'
      i -= 5;
      continue;
    }
    if (i === 4) {
      res += 'XL'
      i -= 4;
      continue;
    }
    res += 'X';
    i--;
  }
  for (let i = oneNum; i > 0;) {
    if (i === 9) {
      res += 'IX'
      i -= 9;
      continue;
    }
    if (i >= 5) {
      res += 'V'
      i -= 5;
      continue;
    }
    if (i === 4) {
      res += 'IV'
      i -= 4;
      continue;
    }
    res += 'I';
    i--;
  }
  return res;
};

function intToRoman_2(num: number): string {
  // 注意 1 <= num <= 3999
  const rules = [
    { ones: 'I', fives: 'V', tens: 'IX', four: 'IV', divisor: 1 },    // 个位
    { ones: 'X', fives: 'L', tens: 'XC', four: 'XL', divisor: 10 },   // 十位
    { ones: 'C', fives: 'D', tens: 'CM', four: 'CD', divisor: 100 },  // 百位
    { ones: 'M', fives: '', tens: '', four: '', divisor: 1000 },      // 千位
  ];
  let res = '';
  for (let i = rules.length - 1; i >= 0; i--) {
    const { ones, fives, tens, four, divisor } = rules[i];
    // 计算当前位的数值
    const digit = Math.floor((num % (divisor * 10)) / divisor);
    if (digit === 0) continue; // 位值为0时跳过

    // 复用统一的位处理逻辑
    let d = digit;
    while (d > 0) {
      if (d === 9) {
        res += tens;
        d -= 9;
      } else if (d === 4) {
        res += four;
        d -= 4;
      } else if (d >= 5) {
        res += fives;
        d -= 5;
      } else {
        res += ones;
        d--;
      }
    }
  }
  return res;
};