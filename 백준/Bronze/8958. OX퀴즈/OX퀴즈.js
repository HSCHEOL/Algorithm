const fs = require('fs');
const [N , ...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

for(let i=0; i<stdin.length; i++){
    const newArray = stdin[i]
    let score = 0;
    let result = 0;

    for(let j=0; j<newArray.length; j++){
        if(newArray[j] === "O"){
            score++
            result += score
        } else {
            score = 0;
        }
        
    }

    console.log(result)
}