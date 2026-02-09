function simplifyPath(path: string): string {
  const stack: string[] = [];
  const parts = path.split('/');
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === '' || part === '.') {
      continue;
    } else if (part === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(part);
    }
  }

  return '/' + stack.join('/');
};