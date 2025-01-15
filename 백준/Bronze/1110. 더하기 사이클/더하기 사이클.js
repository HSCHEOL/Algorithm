const fs = require('fs');
let stdin = fs.readFileSync('/dev/stdin').toString().trim();

let loop = true
let origin = stdin
let count = 0

while(loop){
    const firstN = Math.floor(origin/10)
    const secondN = origin % 10
    let sum = (firstN + secondN).toString().split("")

    if(sum.length == 1) {
        sum.unshift("0")
    }

    const newNumber = String(secondN) + sum[1]

    origin = Number(newNumber);
    count ++;
    
    if(origin == stdin){
        console.log(count);
        loop = false;
    }
   
}



