function addBinary(a: string, b: string): string {
  const aArr = a.split('').reverse().join('');
  const bArr = b.split('').reverse().join('');

  const n = Math.max(a.length, b.length);
  let carry: number = 0;
  const ans = [];

  for (let i = 0; i < n; i++) {
    carry += (i < a.length ? parseInt(aArr[i]) : 0);
    carry += i < b.length ? parseInt(bArr[i]) : 0;
    ans.push((carry % 2).toString());
    carry = Math.floor(carry / 2);
  }
  if (carry) {
    ans.push('1');
  }

  return ans.reverse().join('');
};