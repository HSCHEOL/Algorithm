function solution(s) {
  let count = 0;

  for (i = 0; i < s.length; i++) {
    s[i] === "(" ? (count += 1) : (count -= 1);
    if (count < 0) {
      return false;
    }
  }
      if (count == 0) {
    return true;
  } else {
    return false;
  }
}