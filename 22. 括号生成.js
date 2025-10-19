/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 存储所有合法的括号
  const res = [];

  // 深度优先搜索
  const dfs = (lSum, rSum, str) => {
    // 终止条件：左右括号都已用完（剩余数量均为0）
    // 此时当前字符串是一个合法的括号组合，加入结果集
    if (lSum === 0 && rSum === 0) {
      res.push(str);
      return;
    }

    // 选择1：使用左括号（前提是还有剩余左括号）
    // 每次使用一个左括号，剩余左括号数量减1
    if (lSum > 0) {
      dfs(lSum - 1, rSum, str + '(');
    }

    // 选择2：使用右括号（前提是剩余右括号数量 > 剩余左括号数量）
    // 确保不会出现右括号比左括号多的情况（如 ")(" 这种无效组合）
    // 每次使用一个右括号，剩余右括号数量减1
    if (lSum < rSum) {
      dfs(lSum, rSum - 1, str + ')');
    }

    // 隐含剪枝逻辑：
    // 当剩余左括号数量 >= 剩余右括号数量时（lSum >= rSum）
    // 这种情况不进入递归，相当于剪去了无效分支
  }

  // 初始调用：左括号和右括号各有n个，初始字符串为空
  dfs(n, n, "");
  return res;
};