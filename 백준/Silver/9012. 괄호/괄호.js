const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const T = stdin.shift() //테스트 케이스의 개수
//(가 나오면 +1 하고 )가 나오면 -1을 해준다!

for(i=0; i<T; i++) { //한줄 한줄 처리를 위한 것
//한 라인을 순회하면서 
    let arrPS = stdin[i].split("")
    let count = 0 
    let end = true
    for(let j=0; j<arrPS.length; j++){
        if(arrPS[j] === "("){
            count += 1
        }
        else if(arrPS[j] === ")"){
            count -= 1
        }
        
        if(count < 0){
            console.log("NO")
            end = false;
            break;
        }
    }
    if(count == 0 && end == true){
        console.log("YES")
    }
    else if(count !=0 && end == true){
        console.log("NO")
    }
        }

