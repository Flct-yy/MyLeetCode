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

function mergeTwoLists_1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists_1(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists_1(list1, list2.next);
    return list2;
  }
};
function mergeTwoLists_2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return dummy.next;
};