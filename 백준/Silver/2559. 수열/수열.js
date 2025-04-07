const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, K] = stdin[0].split(" ").map(Number);
const input = stdin[1].split(" ").map(Number);

// 첫 번째 윈도우의 합
let sum = 0;
for (let i = 0; i < K; i++) {
  sum += input[i];
}

let max = sum;

// 윈도우를 오른쪽으로 하나씩 이동하면서 합 갱신
for (let i = K; i < N; i++) {
  sum = sum - input[i - K] + input[i];
  if (sum > max) max = sum;
}

console.log(max);