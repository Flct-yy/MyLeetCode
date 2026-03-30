function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const m = nums1.length;
    const n = nums2.length;
    const heap: [number, number, number][] = [];
    const visited = new Set<string>();
    const res: number[][] = [];

    function push(i: number, j: number) {
        if (i >= m || j >= n) return;
        const key = `${i},${j}`;
        if (visited.has(key)) return;
        visited.add(key);
        heap.push([nums1[i] + nums2[j], i, j]);
        
        // 上浮调整（这部分是对的）
        let cur = heap.length - 1;
        while (cur > 0) {
            const parent = (cur - 1) >> 1;
            if (heap[parent][0] <= heap[cur][0]) break;
            [heap[parent], heap[cur]] = [heap[cur], heap[parent]];
            cur = parent;
        }
    }

    push(0, 0);

    while (heap.length && res.length < k) {
       
        const top = heap[0];
        const last = heap.pop()!;
        if (heap.length > 0) {
            heap[0] = last;
            
            // 下沉调整
            let cur = 0;
            const len = heap.length;
            while (true) {
                let left = cur * 2 + 1;
                let right = cur * 2 + 2;
                let minIdx = cur;
                if (left < len && heap[left][0] < heap[minIdx][0]) minIdx = left;
                if (right < len && heap[right][0] < heap[minIdx][0]) minIdx = right;
                if (minIdx === cur) break;
                [heap[cur], heap[minIdx]] = [heap[minIdx], heap[cur]];
                cur = minIdx;
            }
        }

        const [sum, i, j] = top;
        res.push([nums1[i], nums2[j]]);
        
        push(i, j + 1);
        push(i + 1, j);
    }

    return res;
}