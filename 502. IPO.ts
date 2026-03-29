function findMaximizedCapital_1(k: number, w: number, profits: number[], capital: number[]): number {
  const arr: number[][] = new Array();
  for (let i = 0; i < profits.length; i++) {
    arr.push([profits[i], capital[i], 0]);
  }
  arr.sort((a, b) => b[0] - a[0]);

  let res: number = w;
  while (k > 0) {
    for (let i = 0; i < profits.length; i++) {
      if (arr[i][1] <= res && !arr[i][2]) {
        res += arr[i][0];
        arr[i][2] = 1;
        break;
      }
    }
    k--;
  }

  return res;
};

class MyMaxHeap {
    private heap: number[];
    constructor() { this.heap = []; }

    push(val: number) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }

    pop(): number {
        const max = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length) {
            this.heap[0] = last;
            this.shiftDown(0);
        }
        return max;
    }

    isEmpty(): boolean { return this.heap.length === 0; }

    private shiftUp(i: number) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.heap[p] >= this.heap[i]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    private shiftDown(i: number) {
        const len = this.heap.length;
        while (true) {
            let l = i * 2 + 1, r = i * 2 + 2, max = i;
            if (l < len && this.heap[l] > this.heap[max]) max = l;
            if (r < len && this.heap[r] > this.heap[max]) max = r;
            if (max === i) break;
            [this.heap[i], this.heap[max]] = [this.heap[max], this.heap[i]];
            i = max;
        }
    }
}

function findMaximizedCapital_2(k: number, w: number, profits: number[], capital: number[]): number {
    const n = profits.length;
    const projects: [number, number][] = [];
    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]]);
    }
    projects.sort((a, b) => a[0] - b[0]);

    const heap = new MyMaxHeap();
    let cur = w;
    let idx = 0;

    for (let i = 0; i < k; i++) {
        while (idx < n && projects[idx][0] <= cur) {
            heap.push(projects[idx][1]);
            idx++;
        }
        if (heap.isEmpty()) break;
        cur += heap.pop();
    }
    return cur;
};