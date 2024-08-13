const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const A = stdin[0];
const B = stdin[2];

console.log(A-B)