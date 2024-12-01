const [r1, c1, r2, c2] = require('fs')
        .readFileSync('./dev/stdin')
        .toString()
        .trim()
        .split(' ')
        .map((v) => +v);

const w = r2 - r1;
const h = c2 - c1;
let answer = Array.from(Array(w + 1), () => Array(h + 1));
const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

let dir = 0;

let x = 0;
let y = 0;
let total = 0;
const curveMap = [];
let temp = 1;
while (total < 10001 * 10001) {
        curveMap.push(temp);
        curveMap.push(temp);
        total += 2 * temp;
        temp++;
}

let num = 1;
let curve = curveMap.shift();
let long = 1;
while (num <= 10001 * 10001) {
        if (x >= r1 && x <= r2 && y >= c1 && y <= c2) {
                long = Math.max(long, `${num}`.length);
                answer[x - r1][y - c1] = `${num}`;
        }
        x += dx[dir];
        y += dy[dir];
        curve--;
        if (curve == 0) {
                curve = curveMap.shift();
                dir = (dir + 1) % 4;
        }
        num++;
}
// console.log(curveMap.length);
// console.log(answer);
console.log(answer.map((v) => v.map((x) => x.padStart(long, ' ')).join(' ')).join('\n'));