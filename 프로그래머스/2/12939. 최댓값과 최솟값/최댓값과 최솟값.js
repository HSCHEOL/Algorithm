function solution(s) {
  let answer = "";
  const new_s = s.split(" ").map((a) => Number(a));
  MaxNumber = new_s.reduce((a, b) => (a > b ? a : b));
  MinNumber = new_s.reduce((a, b) => (a > b ? b : a));
  answer = `${MinNumber} ${MaxNumber}`;
  return answer;
}