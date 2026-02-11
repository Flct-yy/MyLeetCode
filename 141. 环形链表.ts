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

function hasCycle_1(head: ListNode | null): boolean {
  const set = new Set();
  let node: ListNode | null = head;
  while (node) {
    if (set.has(node)) {
      return true;
    }
    set.add(node);
    node = node.next;
  }
  return false;
}

function hasCycle_2(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow ? slow.next : null;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};