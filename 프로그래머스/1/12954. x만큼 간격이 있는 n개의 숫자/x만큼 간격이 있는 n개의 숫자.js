function solution(x, n) {
  let arr = [];

  if (x > 0) {
    for (i = x; i <= x * n; i += x) {
      arr.push(i);
    }
  } else if (x < 0) {
    for (i = x; i >= x * n; i += x) {
      arr.push(i);
    }
  } else if (x === 0) {
    for (i = 0; i < n; i++) {
      arr.push(0);
    }
  }

  return arr;
}