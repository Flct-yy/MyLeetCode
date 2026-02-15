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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }
  let dummy = new ListNode(0, head);
  let prev: ListNode | null = dummy;
  let curr: ListNode | null = head;
  while (curr && curr.next) {
    let next: ListNode | null = curr.next;
    if (curr.val === next.val) {
      while (next && curr.val === next.val) {
        next = next.next;
      }
      prev!.next = next;
      curr = next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummy.next;
};