const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

let answer = 1

for(i=1; i<=stdin; i++) {
    answer *=i 
}


console.log(answer)