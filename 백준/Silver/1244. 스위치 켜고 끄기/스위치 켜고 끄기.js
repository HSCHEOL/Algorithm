const fs = require('fs');
const [a,b,N, ...human] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const hum = human.map(a => a.split(" ").map(a => Number(a)))
const switch_number = Number(a)
const switch_output = b.split(" ").map(a => +a)


//hum 배열을 돌면서 
//남자면 다음 switch_ouput 배열에서 (부여받은 번호 - 1) 인덱스를 따진다. 그리고 부여받은 번호*2 - 1 인덱스도 바꾼다. 배열이 끝날때까지 반복
//여자면 다음 switch_output 배열에서 부여받은 번호를 끝 인덱스 , 부여받은 번호 - 2를 첫 인덱스로 설정 대칭 비교 범위 지정해서 바꾸기

function Man(switch_output , num) { // 남자일 경우
    for(let i = num; i<=switch_output.length; i += num){
        switch_output[i-1] ? switch_output[i-1] = 0 : switch_output[i-1] = 1
    }
}

function Girl(switch_output , num) { // 여자일 경우
    let index = num - 1;
    let left_index = index - 1  
    let right_index = index + 1

    while(
    left_index>=0 &&
    right_index<switch_output.length &&
    switch_output[left_index] == switch_output[right_index]){
        left_index -= 1
        right_index += 1
    }

    for(let j=left_index+1; j<right_index; j++){
        switch_output[j] ? switch_output[j] = 0 : switch_output[j] = 1
    }
    
}

for(let k=0; k<hum.length; k++){
    if(hum[k][0] == 1){
        Man(switch_output , hum[k][1])
    }else if(hum[k][0] == 2){
        Girl(switch_output , hum[k][1])
    }
}


for(let e = 0; e<switch_output.length; e += 20){
    console.log(switch_output.slice(e, e+20).join(' '))
}



