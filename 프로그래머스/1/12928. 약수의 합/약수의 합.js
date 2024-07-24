function solution(n) {
  let arr = [];
  let sum = 0;

  for (i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  for (const n of arr) {
    sum += n;
  }

  return sum;
}