const fs = require('fs');
const [N , ...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

//X로 split 한다.
//O로 이루어진 문자열의 인덱스만큼 더한다.


for(let i=0; i<N; i++){
let score = 0
const newStdin = stdin[i].split("X")

for(let i = 0; i < newStdin.length; i++){
    if(newStdin[i].includes("O")){
        for(let j=newStdin[i].length; j>0; j--){
            score += j
        }
    }
}

console.log(score)
}