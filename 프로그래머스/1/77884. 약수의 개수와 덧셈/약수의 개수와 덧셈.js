let answer = 0;

const Dividi = (left) => {
  let result = [];
  for (let num = 1; num <= left; num++) {
    if (left % num === 0) {
      result.push(num);
    }
  }
  console.log(result);
  if (result.length % 2 === 0) {
    answer += left;
  } else {
    answer -= left;
  }
};

function solution(left, right) {
    while(left <= right) {
        Dividi(left);
        left++;
    }
    return answer;
}