function fullJustify_1(words: string[], maxWidth: number): string[] {
  const wL = words.length;
  const lines: string[] = new Array();
  let startInd = 0;
  let lineChNum = 0;
  let tempStr = '';
  for (let i = 0; i < wL; i++) {
    lineChNum += words[i].length;
    if (lineChNum < maxWidth) {
      lineChNum++;
      tempStr += words[i] + ' ';
    } else if (lineChNum > maxWidth) {
      const blankNum = maxWidth - lineChNum + (words[i].length) + i - startInd;
      if (i - 1 === startInd) {
        tempStr = words[startInd] + ' '.repeat(blankNum >= 0 ? blankNum : 0);
      } else {
        const everyBlack = Math.floor(blankNum / (i - 1 - startInd));
        let resBlack = blankNum % (i - 1 - startInd);
        tempStr = '';
        for (; startInd < i - 1; startInd++) {
          tempStr += words[startInd] + ' '.repeat(everyBlack) + (resBlack-- > 0 ? ' ' : '')
        }
        tempStr += words[i - 1];
      }
      lines.push(tempStr);
      tempStr = words[i] + ' ';
      lineChNum = words[i].length + 1;
      startInd = i;
    } else {
      tempStr += words[i];
      lines.push(tempStr);
      tempStr = '';
      lineChNum = 0;
      startInd = i + 1;
    }
  }
  if (lineChNum !== 0) {
    const blackNum = maxWidth - lineChNum;
    if (blackNum >= 0) {
      lines.push(tempStr + ' '.repeat(blackNum))
    } else {
      lines.push(tempStr.slice(0, maxWidth))
    }
  }

  return lines;
};

function fullJustify_2(words: string[], maxWidth: number): string[] {
  const ans = [];
  let right = 0, n = words.length;
  while (true) {
    const left = right; // 当前行的第一个单词在 words 的位置
    let sumLen = 0; // 统计这一行单词长度之和
    while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
      sumLen += words[right].length;
      right++;
    }

    // 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充剩余空格
    if (right === n) {
      const s = words.slice(left).join(' ');
      ans.push(s + blank(maxWidth - s.length));
      break;
    }
    const numWords = right - left;
    const numSpaces = maxWidth - sumLen;

    // 当前行只有一个单词：该单词左对齐，在行末填充空格
    if (numWords === 1) {
      ans.push(words[left] + blank(numSpaces));
      continue;
    }

    // 当前行不只一个单词
    const avgSpaces = Math.floor(numSpaces / (numWords - 1));
    const extraSpaces = numSpaces % (numWords - 1);
    const s1 = words.slice(left, left + extraSpaces + 1).join(blank(avgSpaces + 1)); // 拼接额外加一个空格的单词
    const s2 = words.slice(left + extraSpaces + 1, right).join(blank(avgSpaces)); // 拼接其余单词
    ans.push(s1 + blank(avgSpaces) + s2);
  }
  return ans;
}

const blank = (n: number):string => {
  return new Array(n).fill(' ').join('');
}