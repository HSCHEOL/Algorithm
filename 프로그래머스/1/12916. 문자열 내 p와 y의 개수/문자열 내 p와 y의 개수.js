function solution(text) {
  let pro = text;
  let answer;

  let pos1 = pro.split("p");
  let pos2 = pro.split("P"); 
    
  let pos3 = pro.split("y");
  let pos4 = pro.split("Y");

  let p_length = (pos1.length - 1) + (pos2.length - 1); //전체 P
  let y_length = (pos3.length - 1) + (pos4.length - 1); //전체 Y


  if (p_length == y_length) {
    answer = true;
  } else if (p_length != y_length) {
    answer = false;
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  return answer;
}