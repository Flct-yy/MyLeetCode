function isPalindrome(s: string): boolean {
  let left = 0, right = s.length - 1;
  while (left <= right) {
    const leftCode = s.charCodeAt(left);
    const rightCode = s.charCodeAt(right);
    if (isReasonable(leftCode) === -1) {
      left++
    } else if (isReasonable(rightCode) === -1) {
      right--;
    } else if (isReasonable(leftCode) !== isReasonable(rightCode)) {
      return false;
    } else {
      console.log(isReasonable(leftCode), isReasonable(rightCode));
      left++;
      right--;
    }
  }
  return true;
};

function isReasonable(code: number): number {
  if (code >= 97 && code <= 122) {
    return code;
  } else if (code >= 65 && code <= 90) {
    return code + 32;
  } else if (code >= 48 && code <= 57) {
    return code;
  } else {
    return -1;
  }
}