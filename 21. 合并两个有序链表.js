/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 创建一个新的链表
  const res = new ListNode(0);
  // 记录当前链表的最后一个节点
  let pre = res;
  while (list1 !== null && list2 !== null) {
    // 取出两个链表中较小的节点
    if (list1.val < list2.val) {
      // 将较小的节点添加到结果链表中
      pre.next = list1;
      list1 = list1.next;
    } else {
      pre.next = list2;
      list2 = list2.next;
    }
    // 更新 pre 指针
    pre = pre.next;
  }
  // 将剩余的节点添加到结果链表中
  if (list1 !== null) pre.next = list1;
  if (list2 !== null) pre.next = list2;
  // 返回结果链表的头节点
  return res.next;
};