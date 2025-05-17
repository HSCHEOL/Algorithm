const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = stdin.shift()
const array1 = stdin.shift().split(" ").map(a => +a)
const M = stdin.shift()
const array2 = stdin.shift().split(" ").map(a => +a)

const map = new Map()
const answer = []

for(let i=0; i<N; i++){
    map.set(array1[i])
}

for(let j=0; j<M; j++){
    if(map.has(array2[j])){
        answer.push(1)
    }
    else{
        answer.push(0)
    }
}

console.log(answer.join(" "))
