const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const k = stdin.shift() // 입력된 정수의 개수
let answer = []

for(let items of stdin){
    items = Number(items)
    if(items != 0) { //0이 아니라면 뒤에서부터 채워넣기 
        answer.push(items)
    }
    else if(items == 0) { //0이라면 뒤에서부터 꺼내기 
        answer.pop()
    }
}

if(answer.length === 0){
    console.log(0)
}
else{
    console.log(answer.reduce((a,c) => a+c))
}


