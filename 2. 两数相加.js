/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 将两个用链表表示的数字相加（初始解法）
 * 思路：先处理两个链表的公共部分，再处理较长链表的剩余部分，最后处理可能的进位
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let c1 = l1, c2 = l2;
  // 创建结果链表的虚拟头节点
  const res = new ListNode(null);
  let current = res;
  // 进位值
  let pre = 0;
  // 处理两个链表的公共长度部分
  while (c1 !== null && c2 !== null) {
    const sum = c1.val + c2.val + pre;
    const val = sum % 10; // 当前位的值
    pre = Math.floor(sum / 10); // 进位值

    // 创建新节点并移动指针
    const newNode = new ListNode(val);
    current.next = newNode;
    current = newNode;

    c1 = c1.next;
    c2 = c2.next;
  }
  // 处理两个链表的剩余部分
  if (c1 !== null) current.next = c1;
  if (c2 !== null) current.next = c2;
  // 处理可能的进位
  while (pre !== 0) {
    // 当链表的最后一位有进位时，创建新节点并移动指针
    if (current.next === null) {
      current.next = new ListNode(pre);
      pre = 0;
    } else {
      // 否则，当前节点的值加上进位值，并移动指针
      const sum = pre + current.next.val;
      pre = Math.floor(sum / 10);
      current.next.val = sum % 10;
      current = current.next;
    }
  }
  return res.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 将两个用链表表示的数字相加（优化解法）
 * 思路：使用 dummy 节点简化代码，并在循环中处理进位值  (将所有情况合并)
 * @param {ListNode} l1
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 创建结果链表的虚拟头节点
  const dummy = new ListNode(0);
  let current = dummy;
  // 进位值
  let carry = 0;

  // 处理两个链表
  while (l1 || l2 || carry) {
    // 考虑l1和l2都为空的情况
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    // 考虑l1和l2都为空的情况 (移动指针)
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};