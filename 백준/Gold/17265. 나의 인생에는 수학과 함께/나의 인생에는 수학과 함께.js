const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const board = input.slice(1).map(line => line.split(' '));

let maxResult = -Infinity;
let minResult = Infinity;

const directions = [
  [1, 0], // 아래
  [0, 1], // 오른쪽
];

function calculate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
}

function dfs(x, y, currentValue, currentOperator) {
  if (x === N - 1 && y === N - 1) {
    maxResult = Math.max(maxResult, currentValue);
    minResult = Math.min(minResult, currentValue);
    return;
  }

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;

    const cell = board[nx][ny];

    if (['+', '-', '*'].includes(cell)) {
      dfs(nx, ny, currentValue, cell);
    } else {
      const newValue = calculate(currentValue, currentOperator, cell);
      dfs(nx, ny, newValue, null);
    }
  }
}

dfs(0, 0, Number(board[0][0]), null);
console.log(`${maxResult} ${minResult}`);