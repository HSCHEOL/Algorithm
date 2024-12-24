// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//처음 입력받은 수의 개수 count 만큼 반복문 돌리기
//출력되는 숫자를 순서대로 정렬하도록 하기
//배열에 넣고
//sort로 정렬을 해서
//배열 값을 하나씩 출력하도록 한다.


const count = stdin[0] //첫번째 입력된 숫자가 갯수이므로
const A = [] //값들을 넣기 위한 배열

for(i=1; i<=count; i++){
    A.push(stdin[i])
}
A.sort((a,b) => a-b).forEach((a) => console.log(a))
