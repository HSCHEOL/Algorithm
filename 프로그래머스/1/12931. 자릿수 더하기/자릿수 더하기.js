function solution(n) {
  let answer = 0;
  const str = String(n); 
  const newArray = Array.from(str);

  for (const item of newArray) {
    let newItem = Number(item);
    answer += newItem;
  }

  console.log(answer);



  return answer;
}