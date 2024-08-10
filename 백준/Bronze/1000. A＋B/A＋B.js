const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();
let A = stdin[0];
let B = stdin[2];

function solution(A , B) {
    console.log(Number(A) + Number(B));
}

solution(A , B)