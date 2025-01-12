const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const T = stdin[0] //테스트 케이스의 갯수

for(i=1; i<=T; i++) { //테스트 케이스만큼 반복 실행. 한줄 한줄 처리하기
    //반복횟수 R과 문자열 S
    const Line = stdin[i].split(" ")
    const R = Number(Line[0]) //반복횟수
    const S = Line[1] //문자열
    const P = []

    for(let j=0; j<S.length; j++) {
        for(let k=0; k<R; k++){
            P.push(S[j])         
        }
        }
        console.log(P.join(""))
} 