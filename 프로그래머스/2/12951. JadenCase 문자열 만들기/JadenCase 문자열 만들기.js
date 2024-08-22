function solution(s) {
  const words = s.split(" ");
  const answer = [];

  for (let i of words) {
    if (i) {  // i가 빈 문자열이 아닐 때
      if (!isNaN(i[0])) {
        // 첫 글자가 숫자라면 그대로 두고 나머지를 소문자로 변환
        answer.push(i[0] + i.slice(1).toLowerCase());
      } else {
        // 첫 글자가 문자라면 첫 글자만 대문자로, 나머지는 소문자로 변환
        answer.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
      }
    } else {
      // 빈 문자열일 경우 공백을 유지
      answer.push("");
    }
  }

  return answer.join(" ");
}