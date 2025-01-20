const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n")


const k = stdin.shift()

let stack = []

//push를 어떻게 인식해서 스택에 넣을건데?
for(let command of stdin){
    if(command.indexOf("push") == 0){
        let push = command.split(" ") //배열로 나눠서 두번째 인덱스 값을 숫자로 만들어 넣자
        stack.push(Number(push[1]))
    }
    else if(command === "pop"){
        if(stack.length == 0){
            console.log(-1)
        }else{
            const n = stack.pop()
            console.log(n)
        }
    }
    else if(command === "size"){
        console.log(stack.length)
    }
    else if(command === "empty"){
        if(stack.length == 0){
            console.log(1)
        } else {
            console.log(0)
        }
    }
    else if(command === "top"){
        const length = stack.length
        if(length == 0){
            console.log(-1)
        }else{
            console.log(stack[length - 1])
        }
    }
    }
