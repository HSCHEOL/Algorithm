const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(" ").filter((a) => a !== "");

console.log(stdin.length)
