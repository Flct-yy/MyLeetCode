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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let num1 = l1;
  let num2 = l2;
  let carry = 0;
  let result = null;
  let current = null;

  while (num1 || num2 || carry) {
    let sum = (num1 ? num1.val : 0) + (num2 ? num2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode((sum % 10));

    if (!result) {
      result = node;
      current = node;
    } else {
      if (!current) return null;
      current.next = node;
      current = node;
    }

    if (num1) num1 = num1.next;
    if (num2) num2 = num2.next;
  }
  
  return result;
};