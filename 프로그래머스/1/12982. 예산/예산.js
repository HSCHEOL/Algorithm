function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (i of d) {
    budget -= i;
    if (budget >= 0) {
      answer += 1;
      if (budget == 0) {
        return answer;
      }
    } else {
      return answer;
    }
  }
    return answer;
}