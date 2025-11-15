/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const last = new Array(26).fill(0);
  const sLen = s.length;
  // codePointAt 获取字符的 Unicode 编码
  const codePointA = 'a'.codePointAt(0);

  // 遍历一遍后能够获取每个字符最后出现的位置
  for (let i = 0; i < sLen; i++) {
    last[s.codePointAt(i) - codePointA] = i;
  }

  const res = [];
  let start = 0;
  let end = 0;
  // 开始划分
  for (let i = 0; i < sLen; i++) {
    // 判断当前字符最后出现的位置是否大于当前划分的 end
    end = Math.max(end, last[s.codePointAt(i) - codePointA]);
    // 当 i 到达 end 时，说明可以划分一个区间
    if (i === end) {
      // 划分区间长度入结果集
      res.push(end - start + 1);
      // 重置 start 和 end 继续划分下一个区间
      start = end + 1;
      end = start;
    }
  }
  return res;
};