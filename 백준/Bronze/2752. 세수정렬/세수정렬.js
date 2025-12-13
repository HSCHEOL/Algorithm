const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(a => Number(a));

console.log(stdin.sort((a,b) => a-b).join(" "))
