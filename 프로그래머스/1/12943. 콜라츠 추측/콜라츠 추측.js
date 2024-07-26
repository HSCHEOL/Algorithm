let count = 0;

function solution(num) {
  if (count >= 500) {
    return -1;
  }
  if (num === 1) {
    console.log(count);
    return count;
  }
  if (num % 2 === 0) {
    count++;
    return solution(num / 2);
  } else {
    count++;
    return solution(num * 3 + 1);
  }
}