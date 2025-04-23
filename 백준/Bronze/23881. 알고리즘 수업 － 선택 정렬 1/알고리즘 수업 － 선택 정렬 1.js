const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = stdin[0].split(" ").map((a)=>Number(a));
const input_array = stdin[1].split(" ").map((a) => Number(a));

const A = input[0];
const K = input[1];
let count = 0;

//순회하고, 제일 작은수를 골라서 0번 인덱스와 교체하지
//그리고 그 다음 인덱스부터 또 순회하고 이번엔 제일 작은수 1번 인덱스와 교체
//이걸 반복해서 끝까지

for(let i=A-1; i>=0; i--){
    let max = input_array[i] 
    let maxIndex = i
    //항상 제일 작은 수와 교체가 되어야하는 인덱스
    for(let j=i-1; j>=0; j--){
        if(input_array[j] > max){
            max = input_array[j]
            maxIndex = j
        }
    }
    if(input_array[i] != max){  
        [input_array[i] , input_array[maxIndex]] = [input_array[maxIndex] , input_array[i]]
        count++;

        if(count == K) {
            console.log(input_array[maxIndex] , input_array[i])
            break;
        }
        
    }
}

if(count < K){
    console.log(-1)
}
