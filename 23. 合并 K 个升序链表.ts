/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

class MyMinHeap {
  private heap: ListNode[];

  constructor() {
    this.heap = [];
  }

  // 插入节点
  push(node: ListNode) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  // 弹出堆顶（最小值）
  pop(): ListNode | null {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);
    return top;
  }

  // 判断堆是否为空
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // 向上调整堆（维护最小堆性质）
  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      // 如果当前节点值小于父节点，交换位置
      if (this.heap[index].val < this.heap[parentIndex].val) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 向下调整堆（维护最小堆性质）
  private bubbleDown(index: number) {
    const length = this.heap.length;
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let smallestIdx = index;

      // 找到当前节点、左孩子、右孩子中的最小值索引
      if (leftChildIdx < length && this.heap[leftChildIdx].val < this.heap[smallestIdx].val) {
        smallestIdx = leftChildIdx;
      }
      if (rightChildIdx < length && this.heap[rightChildIdx].val < this.heap[smallestIdx].val) {
        smallestIdx = rightChildIdx;
      }

      // 如果最小值不是当前节点，交换并继续向下调整
      if (smallestIdx !== index) {
        [this.heap[index], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[index]];
        index = smallestIdx;
      } else {
        break;
      }
    }
  }
}

function mergeKLists_1(lists: Array<ListNode | null>): ListNode | null {
  const minHeap = new MyMinHeap();

  for (const list of lists) {
    if (list) {
      minHeap.push(list);
    }
  }

  const dummy = new ListNode(0);
  let current = dummy;

  while (!minHeap.isEmpty()) {
    const minNode = minHeap.pop()!;
    current.next = minNode; // 将最小节点加入结果链表
    current = current.next; // 移动指针

    if (minNode.next) {
      minHeap.push(minNode.next);
    }
  }

  return dummy.next;
};

function mergeKLists_2(lists: Array<ListNode | null>): ListNode | null {

  const merge = (lists: Array<ListNode | null>, start: number, end: number): ListNode | null => {
    if (start == end) {
      return lists[start];
    }
    if (start > end) {
      return null;
    }
    const mid = (start + end) >> 1;
    return mergeTwoLists(merge(lists, start, mid), merge(lists, mid + 1, end));
  }

  const mergeTwoLists = (a: ListNode | null, b: ListNode | null): ListNode | null => {
    if (a == null || b == null) {
      return a != null ? a : b;
    }
    let head: ListNode = new ListNode(0);
    let tail: ListNode = head, curA: ListNode | null = a, curB: ListNode | null = b;
    while (curA != null && curB != null) {
      if (curA.val < curB.val) {
        tail.next = curA;
        curA = curA.next;
      } else {
        tail.next = curB;
        curB = curB.next;
      }
      tail = tail.next;
    }
    tail.next = (curA != null ? curA : curB);
    return head.next;
  }
  
  return merge(lists, 0, lists.length - 1);
};