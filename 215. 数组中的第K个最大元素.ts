function findKthLargest(nums: number[], k: number): number {
  let nL = nums.length;
  const swap = (a: number, b: number) => {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  const maxHeapify = (i: number, nL: number) => {
    let l = i * 2 + 1, r = i * 2 + 2, largest = i;
    if (l < nL && nums[l] > nums[largest]) {
      largest = l;
    }
    if (r < nL && nums[r] > nums[largest]) {
      largest = r;
    }
    if (largest != i) {
      swap(i, largest);
      maxHeapify(largest, nL);
    }
  }


  for (let i = Math.floor(nL / 2 - 1); i >= 0; --i) {
    maxHeapify(i, nL);
  }

  for (let i = nums.length - 1; i >= nums.length - k + 1; --i) {
    swap(0, i);
    --nL;
    maxHeapify(0, nL);
  }

  return nums[0];
};