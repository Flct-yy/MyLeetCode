/**
 * Map
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  
  //第一遍遍历，将每个字符串的字母排序后存入map
  for(let i = 0; i < strs.length; i++){

    const str = strs[i];
    
    //将字符串拆分为数组后排序，再将排序后的数组连接成字符串
    const sortedStr = str.split('').sort().join('');
    //也可以
    // const sortedStr = [...str].sort().join('');
    
    // 如果有的话, 获取已经有的数组, 并将当前字符串添加到数组末尾
    // 如果没有的话, 新建一个数组, 并将当前字符串添加到数组末尾
    const tempArr = map.get(sortedStr) || [];

    // push 添加到数组末尾
    tempArr.push(str);
    map.set(sortedStr,tempArr);
    // map.set(sortedStr, [...(map.get(sortedStr) || []), str]); // 存入的是 数组(新数组)
    // push 返回的是数组长度, 修改的是原数组, 所以不能直接 push
    // map.set('key', map.get('key').push('value')); // 存入的是 数字(新数组的长度)
  }
  //第二遍遍历，将map的value值存入结果数组
  const result = [];
  for(let [key, value] of map){
    result.push(value);
  }

  return result;
};





/**
 * 优化
 * 冗余的第二遍遍历可以优化为一次遍历
 * tempArr 变量可以省略
 * Map 的 values() 可以直接转为数组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for(let str of strs){
      const sortedStr = str.split('').sort().join('');

      // 如果没有的话, 新建一个数组
      if(!map.has(sortedStr)){
        map.set(sortedStr, []);
      }
      
      //直接 push
      // Map 中存储的是数组的引用, 所以可以直接 get接push
      map.get(sortedStr).push(str);
    }

    // map.values() 返回的是一个迭代器对象, 需要转为数组
    return Array.from(map.values());
    // return [...map.values()]; // 用展开运算符替代 Array.from
};