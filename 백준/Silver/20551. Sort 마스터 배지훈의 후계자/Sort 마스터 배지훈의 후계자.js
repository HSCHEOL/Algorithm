const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M] = stdin.shift().split(" ").map(Number);
const A = [];
for (let i = 0; i < N; i++) {
    A.push(Number(stdin[i]));
}

const queries = stdin.slice(N).map(Number);

A.sort((a, b) => a - b);

// 처음 등장하는 인덱스를 Map에 저장
const indexMap = new Map();
for (let i = 0; i < A.length; i++) {
    if (!indexMap.has(A[i])) {
        indexMap.set(A[i], i);
    }
}

// 정답 출력
let result = [];
for (let q of queries) {
    result.push(indexMap.has(q) ? indexMap.get(q) : -1);
}

console.log(result.join('\n'));