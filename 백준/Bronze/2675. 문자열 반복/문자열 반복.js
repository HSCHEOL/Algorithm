// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const T = Number(stdin[0]);

for(let i =1; i<=T; i++) {
    const[R , S] = stdin[i].split(" ")
    const result = S.split("").map((a) => a.repeat(R)).join("")

    console.log(result)
}

