function lengthOfLastWord_1(s: string): number {
  const sArr: string[] = s.trim().split(/\s+/);
  return sArr[sArr.length - 1].length;
};
function lengthOfLastWord_2(s: string): number {
  let index = s.length - 1;
  while (s[index] === ' ' && index >= 0) {
    index--;
  }
  let res = 0;
  while (index >= 0 && s[index] !== ' ') {
    res++;
    index--;
  }
  return res;
};