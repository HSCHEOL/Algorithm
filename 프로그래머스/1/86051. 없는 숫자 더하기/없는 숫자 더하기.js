function solution(numbers) {
  let answer = 0;

  for (i = 0; i < 10; i++) {
    //배열에서 0부터 9까지 찾기
    if (numbers.indexOf(i) === -1) {
      //indexOf를 통해 값을 못찾으면 -1이므로
      answer += i; // -1이 되는 i 값을 answer에 더해서 없는 수를 더한다.
    }
  }
  return answer;
}