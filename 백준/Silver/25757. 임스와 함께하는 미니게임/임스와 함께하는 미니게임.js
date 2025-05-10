const fs = require('fs');
const [Ngame,...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N,game] = Ngame.split(" ")

//모든 이름을 map에 넣고 총 개수를 게임에 필요한 인원으로 나눈다!

const map = new Map()

for(let i = 0; i<N; i++){
    map.set(stdin[i])
}

//자기 자신은 무조건 포함되어 있으므로 (필요한 인원 수 - 1)로 나눈다.
if(game === "Y"){
    console.log([...map].length / 1)
} else if(game === 'F'){
    console.log(Math.floor([...map].length / 2))
} else if(game === 'O'){
    console.log(Math.floor([...map].length / 3))
}