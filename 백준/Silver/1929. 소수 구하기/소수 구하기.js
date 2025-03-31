// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(" ")

const M = Number(stdin[0])
const N = Number(stdin[1])
let answer = []

function isPrime(n) {
    if(n < 2) return false;
    for(let i=2;i*i<=n;i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}


for(let i=M; i<=N; i++){
    if(isPrime(i)){
        answer.push(i)
    }
}

console.log(answer.join('\n'))



