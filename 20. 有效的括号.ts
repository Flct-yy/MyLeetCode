function isValid(s: string): boolean {
  const stack = [];
  const map: {[key: string]: string} = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  for(let i = 0; i < s.length; i++){
    const char: string = s[i];
    if(char === '(' || char === '[' || char === '{'){
      stack.push(char);
    }else{
      if(stack.length === 0 || stack[stack.length - 1]!== map[char]){
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};