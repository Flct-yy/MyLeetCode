/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 归并排序链表
 * 将链表分成两部分，分别对这两部分进行排序(两部分本身就已经有序)，然后再合并
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // 递归终止条件：如果链表为空或只有一个节点，则已经有序，直接返回
  if (head === null || head.next === null) {
    return head;
  }

  // 快慢指针找到链表的中间节点
  let slow = head, fast = head;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 右半部分头节点
  const mid = slow.next;
  // 分开左右两部分
  slow.next = null;

  const left = sortList(head);
  const right = sortList(mid);

  // 合并左右两部分
  return merge(left, right);
};

/**
 * 合并两个有序链表
 * @param {ListNode} left
 * @param {ListNode} right
 * @return {ListNode}
 */
function merge(left, right) {
  const dummy = new ListNode(0);
  let tail = dummy;

  // 合并两个链表
  while (left && right) {
    if(left.val < right.val){
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }
    tail = tail.next;
  }
  // 合并剩余部分
  tail.next = left ? left : right;

  // 返回合并后的链表
  return dummy.next;
}
