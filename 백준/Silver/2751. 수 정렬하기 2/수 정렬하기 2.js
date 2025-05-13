const fs = require('fs');
const [N, ...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a => +a)


const sort_number = stdin.sort((a , b) => a - b)

console.log(sort_number.join("\n"))

