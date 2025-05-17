const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const arr = [...Array(N)].map((_, i) => i + 1);
const result = [];

let index = 0;

while (arr.length > 0) {
    index = (index + K - 1) % arr.length; // K번째 사람 위치 계산
    result.push(arr.splice(index, 1)[0]); // 해당 요소 제거해서 result에 저장
}

console.log(`<${result.join(', ')}>`); // 출력 포맷