function minMutation(startGene: string, endGene: string, bank: string[]): number {
  const m = startGene.length;
  const n = bank.length;
  const adj = new Array(n).fill(0).map(() => new Array());
  let endIndex = -1;

  for (let i = 0; i < n; i++) {
    if (bank[i] === endGene) {
      endIndex = i;
    }
    for (let j = i + 1; j < n; j++) {
      let mutations = 0;
      for (let k = 0; k < m; k++) {
        if (bank[i][k] !== bank[j][k]) {
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
    return -1;
  }

  const queue = [];
  const visited = new Array(n).fill(false);
  let step = 1;
  for (let i = 0; i < n; i++) {
    let mutations = 0;
    for (let k = 0; k < m; k++) {
      if (startGene[k] !== bank[i][k]) {
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
    for (let i = 0; i < sz; i++) {
      const curr = queue.shift();
      if (curr === undefined) continue;
      if (curr === endIndex) {
        return step;
      }
      for (const next of adj[curr]) {
        if (visited[next]) {
          continue;
        }
        visited[next] = true;
        queue.push(next);
      }
    }
    step++;
  }
  return -1;
};