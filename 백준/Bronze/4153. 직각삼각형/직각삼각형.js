const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

stdin.pop()

for(let i=0; i<stdin.length; i++){
    const numbers = stdin[i].split(" ").map(a => +a).sort((a,b) => a-b).map(a => a*a); //크기 순 정렬
    const largeNum = numbers.pop() //가장 큰 수 배열에서 빼고 따로 넣기
    const sum = numbers.reduce((a,c) => a+c);

    if(largeNum == sum){
        console.log('right')
    } else if(largeNum != sum){
        console.log('wrong')
    } 
}