const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("").map(a => +a);


let answer = ""
stdin.sort((a, b) => b - a).forEach(a => answer += a)
console.log(answer)

