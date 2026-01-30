function findSubstring_1(s: string, words: string[]): number[] {
  const step: number = words[0].length;
  const wordL = words.length;
  const sL = s.length;
  const windowSize: number = wordL * step;
  const res: number[] = [];

  if (!s || wordL === 0) {
    return res;
  }

  const wordFreqMap: Map<string, number> = new Map();
  for (const word of words) {
    wordFreqMap.set(word, (wordFreqMap.get(word) || 0) + 1);
  }

  for (let left = 0; left <= sL - windowSize; left++) {
    const tempFreqMap: Map<string, number> = new Map();
    let isValid = true;

    // 遍历窗口内的所有单词（按step拆分）
    for (let i = 0; i < wordL; i++) {
      // 计算当前单词在s中的起始和结束索引
      const wordStart = left + i * step;
      const wordEnd = wordStart + step;
      const currentWord = s.slice(wordStart, wordEnd);

      // 1. 如果当前单词不在words的频率Map中，直接标记为无效，跳出循环
      if (!wordFreqMap.has(currentWord)) {
        isValid = false;
        break;
      }

      // 2. 更新临时频率Map
      tempFreqMap.set(currentWord, (tempFreqMap.get(currentWord) || 0) + 1);

      // 3. 如果当前单词出现次数超过words中的次数，标记为无效，跳出循环
      if (tempFreqMap.get(currentWord)! > wordFreqMap.get(currentWord)!) {
        isValid = false;
        break;
      }
    }

    // 4. 如果窗口有效，将起始索引left加入结果数组
    if (isValid) {
      res.push(left);
    }
  }

  return res;
};



function findSubstring_2(s: string, words: string[]): number[] {
  const step: number = words[0].length;
  const wordL = words.length;
  const sL = s.length;
  const windowSize: number = wordL * step;
  const res: number[] = [];

  if (!s || wordL === 0) {
    return res;
  }

  const wordFreqMap: Map<string, number> = new Map();
  for (const word of words) {
    wordFreqMap.set(word, (wordFreqMap.get(word) || 0) + 1);
  }

  // 2. 按单词长度分组（只遍历 0 ~ step-1 作为起始位置，避免重复计算）
  for (let start = 0; start < step; start++) {
    const tempFreqMap: Map<string, number> = new Map(); // 当前窗口的单词频率
    let left = start; // 窗口左边界
    let matchCount = 0; // 已匹配（频率符合基准）的单词数量

    // 3. 右边界按step递增，遍历当前分组的所有单词
    for (let right = start; right <= sL - step; right += step) {
      // 取出右边界当前单词
      const currentWord = s.slice(right, right + step);
      const currentWordBaseCount = wordFreqMap.get(currentWord) || 0;

      // 3.1 若当前单词不在基准频率表中，重置窗口
      if (currentWordBaseCount === 0) {
        tempFreqMap.clear();
        matchCount = 0;
        left = right + step; // 左边界跳到当前右边界的下一个单词
        continue;
      }

      // 3.2 更新临时频率表
      const currentWordTempCount = (tempFreqMap.get(currentWord) || 0) + 1;
      tempFreqMap.set(currentWord, currentWordTempCount);

      // 3.3 若当前单词频率未超过基准，匹配数+1；否则需要收缩左窗口
      if (currentWordTempCount <= currentWordBaseCount) {
        matchCount++;
      } else {
        // 收缩左窗口：直到当前单词的频率不超标
        while (tempFreqMap.get(currentWord)! > currentWordBaseCount) {
          const leftWord = s.slice(left, left + step);
          const leftWordTempCount = tempFreqMap.get(leftWord)! - 1;
          tempFreqMap.set(leftWord, leftWordTempCount);

          // 若左窗口移出的单词之前是匹配的，匹配数-1
          if (leftWordTempCount < wordFreqMap.get(leftWord)!) {
            matchCount--;
          }

          // 左边界右移一个单词长度
          left += step;
        }
      }

      // 3.4 若匹配数等于单词总数，说明窗口有效，记录左边界索引
      if (matchCount === wordL) {
        res.push(left);

        // 收缩左窗口（移除最左边的单词），继续寻找下一个可能的窗口
        const leftWord = s.slice(left, left + step);
        tempFreqMap.set(leftWord, tempFreqMap.get(leftWord)! - 1);
        matchCount--;
        left += step;
      }
    }
  }

  return res;
}