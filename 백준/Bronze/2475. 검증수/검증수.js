const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(a => Number(a*a)).reduce((a,c) => a+c)

const answer = stdin % 10

console.log(answer)