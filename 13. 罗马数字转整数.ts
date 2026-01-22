function romanToInt(s: string): number {
  const search: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  const sArr: string[] = s.split('');
  let res = 0;
  for (let [index, value] of sArr.entries()) {
    const next = search[sArr[index + 1]] || 0;
    if (search[value] < next) {
      res -= search[value];
    } else {
      res += search[value];
    }
  }
  return res;
};