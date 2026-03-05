function ladderLength_1(beginWord: string, endWord: string, wordList: string[]): number {
  const m = beginWord.length;
  const n = wordList.length;
  const adj = new Array(n).fill(0).map(() => new Array());
  let endIndex = -1;

  for (let i = 0; i < n; i++) {
    if (wordList[i] === endWord) {
      endIndex = i;
    }
    for (let j = i + 1; j < n; j++) {
      let mutations = 0;
      for (let k = 0; k < m; k++) {
        if (wordList[i][k] !== wordList[j][k]) {
          mutations++;
        }
        if (mutations > 1) {
          break;
        }
      }
      if (mutations === 1) {
        adj[i].push(j);
        adj[j].push(i);
      }
    }
  }

  if (endIndex === -1) {
    return 0;
  }

  const queue: number[] = [];
  const visited = new Array(n).fill(false);
  let num = 1;
  for (let i = 0; i < n; i++) {
    let mutations = 0;
    for (let k = 0; k < m; k++) {
      if (beginWord[k] !== wordList[i][k]) {
        mutations++;
      }
      if (mutations > 1) {
        break;
      }
    }
    if (mutations === 1) {
      queue.push(i);
      visited[i] = true;
    }
  }

  while (queue.length) {
    const sz = queue.length;
    num++;
    for (let i = 0; i < sz; i++) {
      const curr = queue.shift();
      if (curr === undefined) continue;
      if (curr === endIndex) {
        return num;
      }
      for (const next of adj[curr]) {
        if (visited[next]) {
          continue;
        }
        visited[next] = true;
        queue.push(next);
      }
    }
  }
  return 0;
};

function ladderLength_2(beginWord: string, endWord: string, wordList: string[]): number {
  const wordId = new Map();
  const edge: number[][] = [];
  let nodeNum = 0;

  const addWord = (word: string) => {
    if (!wordId.has(word)) {
      wordId.set(word, nodeNum++);
      edge.push([]);
    }
    const id_1 = wordId.get(word);
    const array = word.split('');
    let length = array.length;
    for (let i = 0; i < length; i++) {
      const tmp = array[i];
      array[i] = '*';
      const newWord = array.join('');
      if (!wordId.has(newWord)) {
        wordId.set(newWord, nodeNum++);
        edge.push([]);
      }
      let id_2 = wordId.get(newWord);
      edge[id_1].push(id_2);
      edge[id_2].push(id_1);
      array[i] = tmp;
    }
  }

  for (const word of wordList) {
    addWord(word);
  }
  addWord(beginWord);
  if (!wordId.has(endWord)) {
    return 0;
  }

  let disBegin: number[] = new Array<number>(nodeNum).fill(Infinity);
  let beginId = wordId.get(beginWord);
  disBegin[beginId] = 0;
  const queBegin = [beginId];

  let disEnd: number[] = new Array<number>(nodeNum).fill(Infinity);
  let endId = wordId.get(endWord);
  disEnd[endId] = 0;
  const queEnd = [endId];

  while (queBegin.length && queEnd.length) {
    let queBeginLen = queBegin.length;
    for (let i = 0; i < queBeginLen; ++i) {
      let nodeBegin = queBegin.shift();
      if (disEnd[nodeBegin] != Infinity) {
        return (disBegin[nodeBegin] + disEnd[nodeBegin]) / 2 + 1;
      }
      for (let it of edge[nodeBegin]) {
        if (disBegin[it] == Infinity) {
          disBegin[it] = disBegin[nodeBegin] + 1;
          queBegin.push(it);
        }
      }
    }

    let queEndLen = queEnd.length;
    for (let i = 0; i < queEndLen; ++i) {
      let nodeEnd = queEnd.shift();
      if (disBegin[nodeEnd] != Infinity) {
        return (disBegin[nodeEnd] + disEnd[nodeEnd]) / 2 + 1;
      }
      for (let it of edge[nodeEnd]) {
        if (disEnd[it] == Infinity) {
          disEnd[it] = disEnd[nodeEnd] + 1;
          queEnd.push(it);
        }
      }
    }
  }
  return 0;
};