const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map((a) => a % 42)

//Set은 자동으로 중복제거이므로 Set에 넣고 숫자를 센다.

const newSet = new Set()

stdin.forEach(a => newSet.add(a))

console.log([...newSet].length)