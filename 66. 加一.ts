function plusOne_1(digits: number[]): number[] {
  // 我们只需要对数组 digits 进行一次逆序遍历，找出第一个不为 9 的元素，将其加一并将后续所有元素置零即可。
  let index = -1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      continue;
    } else {
      index = i;
      break;
    }
  }

  for (let i = index + 1; i < digits.length; i++) {
    digits[i] = 0;
  }

  if (index === -1) {
    digits.unshift(1);
  } else {
    digits[index]++;
  }
  return digits;
};

function plusOne_2(digits: number[]): number[] {
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      for (let j = i + 1; j < n; j++) {
        digits[j] = 0;
      }
      return digits;
    }
  }

  const ans = new Array(n + 1).fill(0);
  ans[0] = 1;
  return ans;
};