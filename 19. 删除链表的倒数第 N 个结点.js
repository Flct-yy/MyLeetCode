/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 先创建虚拟头节点
  let dummy = new ListNode(0, head);
  
  let distance = 0;
  let current = dummy, deleteNode = dummy;

  // 遍历链表，计算距离
  while (current.next) {
    // 距离小于n，则则距离增加 
    if (distance < n) {
      distance++;
    } else {
      // 距离大于等于n，则移动 删除节点 指针
      deleteNode = deleteNode.next;
    }
    current = current.next;
  }
  // 当current运行到最后时，deleteNode指针指向倒数第n个节点
  deleteNode.next = deleteNode.next === null ? null : deleteNode.next.next;
  return dummy.next;
};