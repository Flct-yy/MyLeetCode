function strStr_1(haystack: string, needle: string): number {
  const hL = haystack.length;
  const nL = needle.length;
  if (nL === 0) return 0;
  if (hL < nL) return -1;

  let resIndex = -1;
  for (let i = 0; i < hL; i++) {
    if (resIndex !== -1) {
      // 当前匹配的位置
      const matchPos = i - resIndex;
      if (matchPos >= nL) break;
      if (haystack[i] !== needle[matchPos]) {
        i = resIndex;
        resIndex = -1;

      }
    } else {
      if (haystack[i] === needle[0]) {
        resIndex = i;
      }
    }
  }
  return (resIndex !== -1 && (hL - resIndex) >= nL) ? resIndex : -1;
};

function strStr_2(haystack: string, needle: string): number {
  const hLen = haystack.length;
  const nLen = needle.length;

  if (nLen === 0) return 0;
  if (hLen < nLen) return -1;

  // 构建LPS数组
  const buildLPS = (s: string): number[] => {
    const len = s.length;
    const lps = new Array(len).fill(0);
    let prevLPS = 0; // 前一个位置的最长相等前后缀长度
    let i = 1;

    while (i < len) {
      if (s[i] === s[prevLPS]) {
        prevLPS++;
        lps[i] = prevLPS;
        i++;
      } else {
        if (prevLPS !== 0) {
          prevLPS = lps[prevLPS - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  };

  const lps = buildLPS(needle);
  let i = 0;
  let j = 0;
  while (i < hLen) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === nLen) {
        return i - j;
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
};