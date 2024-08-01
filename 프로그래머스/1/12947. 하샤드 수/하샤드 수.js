function solution(x) {
  let sum = 0;
  let arr = String(x).split(""); //문자열로 변경하고 배열로
  for (let i of arr) {
    sum += Number(i);
  }
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}