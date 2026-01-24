function reverseWords_1(s: string): string {
  const sArr = s.trim().split(/\s+/);
  return sArr.reverse().join(' ');
};

function reverseWords_2(s: string): string {
  const sL = s.length;
  let res = '';
  let word = '';
  for (let i = sL - 1; i >= 0; i--) {
    const char = s[i];
    if (char !== ' ') {
      // 非空格字符，拼接成单词
      word = char + word;
    } else if (word) {
      // 遇到空格且当前有已拼接的单词 → 存入数组，重置单词
      res += word + ' ';
      word = '';
    }
  }
  if (word) {
    res += word + '';
  }
  return res.trim();
};