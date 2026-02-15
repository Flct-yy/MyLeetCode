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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 0) {
    return head
  }
  let len = 1
  let p: ListNode | null = head
  while (p?.next !== null) {
    len++
    p = p.next;
  }
  k = k % len;
  if (k === 0) {
    return head;
  }

  let newTail: ListNode | null = head;
  for (let i = 0; i < len - k - 1; i++) {
    newTail = newTail!.next;
  }
  const res = newTail!.next;
  newTail!.next = null;
  p!.next = head;
  return res;
};