function solution(n) {
  let n2 = String(n); //문자열로 변환해서
  let newArray = Array.from(n2); //배열로 만들어준다.
  let answer = [];

  for (const item of newArray) {
    const numItem = Number(item); //각 요소를 다시 Number로 교체 후
    answer.unshift(numItem); //unshift를 통해 앞에부터 값을 넣어준다.
  }

  return answer;
}