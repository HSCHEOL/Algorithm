const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

//한줄 씩 입력받자!
const muti = stdin.reduce((a , b) => a * b).toString().split("") //누적 곱하기
//for문으로 9까지 몇개 있는지 체크 하기..
//배열을 순회해!
//하나하나 비교하면서 i와 같은지 본다.
//정렬해서 숫자를 세면 어떨까?
//첫 순회하면서 1을 찾는다.

for(i=0; i<=9; i++){
    let answer = 0
    for(let j=0; j<muti.length; j++) {
        if(i==muti[j]){
            answer += 1;
           }
    }
    console.log(answer)}

