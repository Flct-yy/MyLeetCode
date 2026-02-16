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

function partition(head: ListNode | null, x: number): ListNode | null {
  let lessHead = new ListNode(0);
  let lessTail = lessHead;
  let greaterHead = new ListNode(0);
  let greaterTail = greaterHead;
  let curr = head;
  while (curr) {
    if (curr.val < x) {
      lessTail.next = curr;
      lessTail = lessTail.next;
    } else {
      greaterTail.next = curr;
      greaterTail = greaterTail.next;
    }
    curr = curr.next;
  }
  lessTail.next = greaterHead.next;
  greaterTail.next = null;
  return lessHead.next;
};