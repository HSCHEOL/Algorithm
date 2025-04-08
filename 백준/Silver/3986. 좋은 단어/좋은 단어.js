const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(stdin[0]);
let good = 0;

for (let i = 1; i <= N; i++) {
  const word = stdin[i];
  const stack = [];

  for (let char of word) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop(); // 같은 글자면 제거
    } else {
      stack.push(char); // 아니면 추가
    }
  }

  if (stack.length === 0) {
    good++; // 좋은 단어
  }
}

console.log(good);