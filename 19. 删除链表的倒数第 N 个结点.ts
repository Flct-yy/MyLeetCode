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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0, head)
  // 存储 要删除节点的头节点
  let prev: ListNode | null = dummy
  let curr = head
  // 计数器
  let count = 0;
  while (curr) {
    if (count === n) {
      if (!prev) return null;
      curr = curr.next;
      prev = prev.next;
    } else {
      curr = curr.next;
      count++;
    }
  }

  if (!prev || !prev.next) return null;
  prev.next = prev.next.next;
  return dummy.next;
};