const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(" ");


const Number1 = Number(stdin[0])
const Number2 = Number(stdin[1])

console.log(Number1 * Number2)