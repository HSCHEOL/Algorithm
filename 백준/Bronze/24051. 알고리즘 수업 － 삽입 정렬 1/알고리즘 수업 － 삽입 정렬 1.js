const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, K] = stdin[0].split(" ").map(a => Number(a));
const input_array = stdin[1].split(" ").map(a => Number(a));
let count = 0;

for(let i=1; i<N; i++){
    const temp = input_array[i]
    let j = i - 1
    while(j>=0 && input_array[j] > temp){
        input_array[j+1] = input_array[j] //뒤로 한칸 밀기
        j--;
        count++;

        if(count == K){
            console.log(input_array[j+1])
        }
    }
    if(input_array[j+1] != temp){
        input_array[j+1] = temp;
        count++;

        if(count == K){
            console.log(input_array[j+1])
        }
    }
        
    
}

if(count < K) {
    console.log(-1)
}


