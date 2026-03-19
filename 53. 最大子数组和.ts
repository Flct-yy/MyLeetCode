function maxSubArray_1(nums: number[]): number {
  let pre: number = 0, maxAns: number = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

class Status {
  lSum: number;
  rSum: number;
  mSum: number;
  iSum: number;
  constructor(l: number, r: number, m: number, i: number) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
  }
}

function maxSubArray_2(nums: number[]): number {
  const pushUp = (l: Status, r: Status): Status => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
  }

  const getInfo = (a: number[], l: number, r: number): Status => {
    if (l === r) {
      return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = Math.floor((l + r) / 2);
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
  }

  return getInfo(nums, 0, nums.length - 1).mSum;
};