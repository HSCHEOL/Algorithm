const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

//첫줄에 나오는 이름들을 돌아가면서 map에 넣고 value 값을 0으로 설정한다.
//그리고 이름이 나올때마다 value 값에 +1 한다.

const N = stdin.shift()
const name_list = stdin.shift().split(" ").sort()
let answer = ""
let map = new Map()

for(let i=0; i<N; i++){ //이름들을 맵에 넣기
    map.set(name_list[i] , 0)
}

for(let j=0; j<stdin.length; j++){
    answer += stdin[j]+" "
}

answer = answer.trim().split(" ")

for(let k=0; k<answer.length; k++){
        map.set(answer[k] , map.get(answer[k]) + 1)
}

const sorted = [...map].sort((a , b) => b[1] - a[1])

for(let items of sorted){
    console.log(items[0],items[1])
}
