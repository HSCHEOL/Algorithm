const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(stdin.shift())
const stack = []
const answer = []


for(i=0; i<n; i++){
    const newstdin = stdin[i].split(" ")
    stdin[i] = newstdin[0]
    const pushNumber = newstdin[1]


    switch(stdin[i]){
       case "1":
            stack.push(Number(pushNumber))
       break;

       case "2": 
        if(stack.length === 0){
            answer.push(-1)
        } else {
            const n = stack.pop()
            answer.push(n)
        }
        break;

        case "3":
            answer.push(stack.length)
        break;

        case "4":
            stack.length === 0 ? answer.push(1) : answer.push(0)    
        break;

        case "5":
            stack.length === 0 ? answer.push(-1) : answer.push(stack[stack.length - 1])
        break;
    }

    
}
console.log(answer.join("\n"))