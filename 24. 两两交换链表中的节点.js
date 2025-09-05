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
var swapPairs = function (head) {

  // 先创建虚拟头节点
  const dummy = new ListNode(0, head);
  // 定义三个指针 分别指向 (上一对交换后的第二个节点，初始为虚拟头节点)，(当前要交换的第一个节点), (当前要交换的第二个节点)
  let ppre = dummy
  let pre = head;
  let current = pre === null ? null : pre.next;

  while (pre && current) {
    // 交换
    const preNext = current.next;
    ppre.next = current;
    current.next = pre;
    pre.next = preNext;

    // 更新指针
    ppre = pre;
    pre = preNext;
    current = pre === null ? null : pre.next;
  }

  return dummy.next;
};