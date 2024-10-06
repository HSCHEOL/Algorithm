function solution(arr) {
  if (arr.length === 1) return [-1];

  const min = Math.min(...arr);
  let answer = [];
  for (i of arr) {
    if (min !== i) {
      answer.push(i);
    }
  }
  return answer;
}