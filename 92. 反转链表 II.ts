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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let curr = head;
  let prev: ListNode | null = dummy;
  let i = 1;
  let leftPreNode: ListNode | null = null;
  let reverseStart: ListNode | null = null;
  while (curr) {
    if (i < left || i > right) {
      prev = curr;
      curr = curr.next;
    }
    else if (i === left) {
      leftPreNode = prev;
      reverseStart = curr;
      prev = curr;
      curr = curr.next;
    }
    else if (i === right) {
      const temp: ListNode | null = curr.next;
      curr.next = prev;

      if (reverseStart) {
        reverseStart.next = temp;
      }
      if (leftPreNode) {
        leftPreNode.next = curr;
      }

      prev = curr;
      curr = temp;
    }
    else {
      const temp: ListNode | null = curr.next;

      curr.next = prev;

      prev = curr;
      curr = temp;
    }
    i++;
  }
  return dummy.next;
};