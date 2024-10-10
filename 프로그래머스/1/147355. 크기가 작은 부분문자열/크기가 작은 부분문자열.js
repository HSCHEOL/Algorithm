function solution(t, p) {
  let arr = [];
  let answer = 0;
  for (i = 0; i <= t.length - p.length; i++) {
    arr.push(t.slice(i, p.length + i));
  }

  for (item of arr) {
    if (Number(p) >= Number(item)) {
      answer += 1;
    }
  }
    return answer;
}