/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 反转链表就是将 curent 的下一个 换成 就链表的上一个
  let current = head;
  let pre = null, next = null;
  // 循环遍历链表 当 current === null 时 说明遍历完毕 此时 pre 就是反转后的链表的头部
  while(current){
    // 提前存储 下个节点 因为 current 会修改 next 成旧链表的上一个
    next = current === null ? null : current.next;
    // 反转链表
    current.next = pre;
    // 更新 pre 和 current
    pre = current;
    current = next;
  }
  return pre;
};