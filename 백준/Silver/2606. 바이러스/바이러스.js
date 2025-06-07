const fs = require('fs');
let [N, M , ...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


stdin = stdin.map(a => a.split(" ").map(a => Number(a)))

const virus = new Set([1])

let prevSize = 0;
while(prevSize !== virus.size){
    prevSize = virus.size;
    for(let item of stdin){
        for(let i = 0; i<2; i++){
            if(virus.has(item[i])){
                virus.add(item[0])
                virus.add(item[1])
                break;
            }
        }
    }
    
}

console.log(virus.size - 1)
