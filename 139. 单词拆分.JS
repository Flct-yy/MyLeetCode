/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const sLen = s.length;

  // dp是一个布尔类型的数组，其中dp[i]表示字符串s的前i个字符（即s[0..i-1]）是否可以被成功拆分
  const dp = new Array(sLen + 1).fill(false);
  
  // 将单词字典转换为Set数据结构
  const wordDictSet = new Set(wordDict);
  
  // dp[0] = true 表示空字符串是可以被拆分的（这是一个基本假设，用于启动整个DP过程）
  // 如果不设置dp[0]为true，那么在第一次检查单个字符时，dp[j]将永远为false，导致整个算法失败
  dp[0] = true;
  
  for (let i = 1; i <= sLen; i++) {
    for (let j = 0; j < i; j++) {
  
      // dp[j]为true：表示字符串的前j个字符(s[0..j-1])是可以被成功拆分的
      // wordDictSet.has(s.substring(j, i))：表示从j到i的子串(s[j..i-1])存在于单词字典中
      if (dp[j] && wordDictSet.has(s.substring(j, i))) {
  
        dp[i] = true;
        break;
  
      }
    }
  }
  
  return dp[sLen];
};