// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const input = stdin[0].split(" ").map(a => Number(a))
const input_array = stdin[1].split(" ").map(a=>Number(a))

const N = input[0]
const K = input[1]
let count = 0

//앞에 두개를 비교
//큰 걸 뒤로 빼기
//N-1만큼 반복을 한다.

for(let i=N-1; i>=0; i--){
    for(let j=0; j<i; j++){
        if(input_array[j] > input_array[j+1]){
            [input_array[j],input_array[j+1]]=[input_array[j+1],input_array[j]]
            count++

            if(count == K){
                console.log(input_array[j],input_array[j+1])
            }
        }
    }
}

if(count < K){
    console.log(-1)
}
