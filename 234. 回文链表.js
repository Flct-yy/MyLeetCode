/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 反转全部链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 创建 新的链表 (旧链表的反转)
  let newHead = null;
  let current = head;
  while (current) {
    // 反转链表
    const newNode = new ListNode(current.val);
    newNode.next = newHead;
    newHead = newNode;

    current = current.next;
  }
  current = head;

  // 检查是否相同
  while (current && newHead) {
    if (current.val !== newHead.val) {
      return false;
    }
    current = current.next;
    newHead = newHead.next;
  }
  return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 反转后部分链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 快慢指针 来找到链表的中间节点
  let slow = head, fast = head;
  // fast可能为null
  while (fast && fast.next) {
    // 慢指针走一步, 快指针走两步
    slow = slow.next;
    fast = fast.next.next;
  }
  // 从慢指针开始反转链表
  let pre = null;
  let curr = slow
  while (curr) {
    const next = curr.next;
    curr.next = pre;
    pre = curr
    curr = next;
  }
  let first = head;
  // curr 变成 null, pre 保存头结点
  // 两个链表共同连接 slow 节点 (slow 节点指向 null)
  let second = pre;
  // 判断second是否与first相同
  while (second) {
    if (second.val !== first.val) {
      return false;
    }

    second = second.next;
    first = first.next;
  }
  return true;
};