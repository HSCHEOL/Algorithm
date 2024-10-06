function solution(absolutes, signs) {
  let answer = 0;

  for (i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      answer += absolutes[i];
    } else if (signs[i] === false) {
      answer -= absolutes[i];
    }
  }
  return answer;
}