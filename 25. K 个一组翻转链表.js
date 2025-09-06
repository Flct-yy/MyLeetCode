/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 创建虚拟头结点
  const dummy = new ListNode(0, head);

  // pre 表示每组数组的前一个 end 表示每组数组的最后一个
  let pre = dummy, end = head;
  let distance = 1;

  while (end) {
    if (distance < k) {
      // 未到 k 个，移动指针
      distance++;
      end = end.next;
    } else {
      const next = end.next;
      const start = pre.next;
      // 反转列表
      end.next = null;
      pre.next = reverseList(start);

      // 移动指针
      start.next = next;
      pre = start;
      end = pre.next;
      distance = 1;
    }
  }

  return dummy.next;

}

// 反转链表
function reverseList(head) {
  let prev = null;
  let curr = head;
  while(curr){
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}