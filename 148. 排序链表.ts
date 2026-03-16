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

function sortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  const findMid = (left: ListNode, right: ListNode | null): ListNode => {
    if (left === right) {
      return left;
    }
    let slow: ListNode | null | undefined = left;
    let fast: ListNode | null | undefined = left.next;
    // 快指针不越界（right 是区间边界，不包含）
    while (fast !== null && fast?.next !== null) {
      slow = slow.next!;
      fast = fast.next?.next;
    }
    return slow;
  };


  const dfs = (left: ListNode | null, right: ListNode | null): ListNode | null => {
    if (left === null) {
      return null;
    }
    if (left === right) {
      return left;
    }
    const mid = findMid(left, right);
    const rightHead = mid.next
    mid.next = null;
    let temp_1 = dfs(left, mid);
    let temp_2 = dfs(rightHead, right);

    const dummyHead = new ListNode(0);
    let temp = dummyHead;
    while (temp_1 !== null && temp_2 !== null) {
      if (temp_1.val <= temp_2.val) {
        temp.next = temp_1;
        temp_1 = temp_1.next;
      } else {
        temp.next = temp_2;
        temp_2 = temp_2.next;
      }
      temp = temp.next;
    }
    if (temp_1 !== null) {
      temp.next = temp_1;
    } else if (temp_2 !== null) {
      temp.next = temp_2;
    }
    return dummyHead.next;
  }
  return dfs(head, null);
};