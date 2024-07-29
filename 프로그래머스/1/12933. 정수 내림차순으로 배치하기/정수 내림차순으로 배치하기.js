function solution(n) {
  let str = String(n);
  let arr = [];
  let answer = "";

  for (i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  arr.sort(); //정렬하기
  arr.reverse(); //뒤집기

  for (i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  answer = Number(answer);
  return answer;
}