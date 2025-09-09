/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  // 过滤掉空链表
  const nonEmptyLists = lists.filter(list => list !== null);
  if (nonEmptyLists.length === 0) return null;

  // 创建虚拟头节点作为结果链表的起始点
  const dummy = new ListNode(0);
  let current = dummy;

  while (nonEmptyLists.length > 0) {
    // 取出最小元素
    let minNode = nonEmptyLists[0], minIndex = 0;
    for (let i = 0; i < nonEmptyLists.length; i++) {
      if (nonEmptyLists[i].val < minNode.val) {
        minNode = nonEmptyLists[i];
        minIndex = i;
      }
    }

    // 将最小元素添加到结果链表中
    current.next = minNode;
    current = current.next;

    // 移动最小节点所在链表的指针
    nonEmptyLists[minIndex] = nonEmptyLists[minIndex].next;

    // 将最小元素从原链表中删除
    if (nonEmptyLists[minIndex] === null) {
      nonEmptyLists.splice(minIndex, 1);
    }
  }

  return dummy.next;
};