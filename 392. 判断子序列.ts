function isSubsequence(s: string, t: string): boolean {
  const sL = s.length;
  const tL = t.length;
  let sPoint = 0;
  let tPoint = 0;
  while (sPoint < sL && tPoint < tL) {
    if (s.charCodeAt(sPoint) === t.charCodeAt(tPoint)) {
      sPoint++;
      tPoint++;
    } else {
      tPoint++;
    }
  }
  if (sPoint === sL) {
    return true
  } else {
    return false;
  }
};