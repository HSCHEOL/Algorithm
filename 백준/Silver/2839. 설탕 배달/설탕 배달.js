const fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim())

//5로만 가는게 제일 베스트
//5로 나누어떨어지면 그대로 끝내면 된다.
//하지만 5로 나누어떨이지지 않으면 3을 빼본다.

let count = 0;

while(N > 0){
    if(N % 5 === 0){
        count += N/5
        console.log(count)
        break;
    }else{
        N -= 3
        count += 1
        if(N === 0){
            console.log(count)
        }
    }

    if(N<0){
        console.log(-1)
        break;
    }
}


