const fs = require('fs');
const [N, ...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a => +a)

const sort_array = stdin.sort((a,b) => b-a)
console.log(sort_array.join("\n"))