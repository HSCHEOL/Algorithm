const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

//해시에 넣고, 공개 과목 배열에 있는것들 체크해서 더하기.
const input_number = stdin.shift().split(" ")

const N = input_number.shift()
const M = input_number.shift()
const K = input_number.shift()

const publicSubjects = [] // 공개 과목
let sum = 0
let maxsum = 0
let minsum = 0

for(let i=0; i<K; i++){ // 공개 과목 배열 만들기
    const ele = stdin.pop()
    publicSubjects.push(ele)
}

const a = stdin.map(a => a.split(" "))

let subjects_map = new Map()

for(let k=0; k<a.length; k++){ //수강 과목을 해시 맵에 넣기
    subjects_map.set(a[k][0] , Number(a[k][1]))
}

//일단 지정과목 합을 구한다.
for(let j=0; j<K; j++){
    const b = subjects_map.get(publicSubjects[j])
    subjects_map.delete(publicSubjects[j])
    sum += b
}


const scores = [...subjects_map.values()].sort((a,b) => a-b)

for(let g=0; g<M-K; g++){
    maxsum += scores[scores.length - 1 - g]
    minsum += scores[g]
}

maxsum += sum
minsum += sum


console.log(minsum , maxsum)