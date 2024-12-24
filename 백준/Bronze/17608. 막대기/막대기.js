const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

//이전것보다 커야한다

const BarNumber = stdin.shift() //막대기 개수
const firstBar = stdin.reverse().shift();
let MaxH = firstBar
let count = 1

//뒤에 하나씩 비교하면서 firstBar 보다 크다면 count +1 해주고 MaxH로 교체한다

stdin.forEach((a) => {
    if(Number(a) > Number(MaxH)) {
        count += 1
        MaxH = a
    }
})

console.log(count)