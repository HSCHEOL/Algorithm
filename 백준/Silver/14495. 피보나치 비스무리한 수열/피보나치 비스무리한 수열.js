const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();
const num = Number(stdin);

let FibonaciArray = [0,1,1,1].map((v) => BigInt(v))

for(i=4; i<=num; i++){
    FibonaciArray[i] = FibonaciArray[i-1]+FibonaciArray[i-3]
}

console.log(FibonaciArray[num].toString())