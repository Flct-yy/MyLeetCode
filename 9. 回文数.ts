function isPalindrome_1(x: number): boolean {
  if (x < 0) return false;
  let cur = x;
  let revN = 0;
  while (cur !== 0) {
    revN = cur % 10 + revN * 10;
    cur = Math.floor(cur / 10);
  }
  return revN === x;
};

function isPalindrome_2(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber: number = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};