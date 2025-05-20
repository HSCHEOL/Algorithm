const fs = require('fs');
const stdin = Number(fs.readFileSync('/dev/stdin').toString().trim());


let star= ""

for(let i=0; i<stdin; i++){
    star += "*"
    console.log(star)
}

