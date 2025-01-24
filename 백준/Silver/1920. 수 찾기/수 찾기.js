const fs = require('fs');
let [N, A, M, X] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// A를 Set으로 변환
const setA = new Set(A.split(" "));
const XArray = X.split(" ");
let answer = "";

for (let x_items of XArray) {
    if (setA.has(x_items)) { // x_items이 setA에 존재하는지 확인
        answer += "1\n";
    } else {
        answer += "0\n";
    }
}

console.log(answer.trim()); // 마지막 줄바꿈 제거 후 출력