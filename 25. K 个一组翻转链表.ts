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

function reverseKGroup_1(head: ListNode | null, k: number): ListNode | null {
  if (k === 1 || !head || !head.next) return head;

  let dummy = new ListNode(0, head)
  let preGroup = dummy
  let prev = dummy
  let curr: ListNode | null = head
  let count = 0
  while (curr) {
    if (count === k) {
      let lastNode: ListNode = preGroup.next!;

      preGroup.next = prev;
      lastNode.next = curr;

      preGroup = lastNode;
      prev = lastNode;
      count = 0;
    } else {
      const next: ListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      count++
    }
  }
  if (count > 0 && count < k) {
    curr = prev;
    let prevN = null;
    while (count > 0) {
      const next: ListNode | null = curr.next!;
      curr.next = prevN;
      prevN = curr;
      curr = next;
      count--;
    }
  } else if (count === k) {
    let lastNode: ListNode = preGroup.next!;

    preGroup.next = prev;
    lastNode.next = null;

    preGroup = lastNode;
    prev = lastNode;
    count = 0;
  }
  return dummy.next;
};

function reverseKGroup_2(head: ListNode | null, k: number): ListNode | null {
  if (k === 1 || !head || !head.next) return head;

  const dummy = new ListNode(0, head);
  let preGroup = dummy; // 每组翻转的前置节点
  let count = 0; // 当前组的节点数

  while (true) {
    // 第一步：先检查剩余节点是否有k个，找到当前组的尾节点
    let groupTail = preGroup;
    count = 0;
    // 移动k次，找到组尾，同时检查是否够k个
    while (count < k && groupTail.next) {
      groupTail = groupTail.next;
      count++;
    }
    // 不足k个，直接返回结果
    if (count < k) return dummy.next;

    // 第二步：记录关键节点
    const groupHead = preGroup.next; // 当前组的头（翻转后变尾）
    const nextGroupHead = groupTail.next; // 下一组的头

    // 第三步：只翻转当前k个节点（核心修正：不再全局翻转）
    let prev: ListNode | null = nextGroupHead; // 翻转后的尾要指向nextGroupHead
    let curr: ListNode | null = groupHead;
    // 只翻转[groupHead, groupTail]这个区间的节点
    while (curr !== nextGroupHead) {
      const next = curr!.next;
      curr!.next = prev;
      prev = curr;
      curr = next;
    }

    // 第四步：重新连接翻转后的组
    preGroup.next = groupTail; // 前置节点指向翻转后的组头（原组尾）
    preGroup = groupHead!; // 更新前置节点为当前组的尾（原组头）
  }
}