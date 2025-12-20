const fs = require('fs');
let [N,size,number] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

number = number.split(" ").map(a => +a)
const shirtSize = number[0] //5
const penSize = number[1] //7

let answer1=0;
let answer2=[];

size = size.split(" ").map(a => +a)

for(let i in size){ //티셔츠 묶음 구하기
    answer1 += Math.ceil(size[i]/shirtSize)
}

answer2.push(Math.floor(N/penSize));
answer2.push(N%penSize);

console.log(answer1)
console.log(answer2.join(" "))
