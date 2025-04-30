const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


const N = stdin.shift()
const map = [] //map에 넣기

//이 배열을 배열로 만들어서 다시 넣기

//이차원 배열 만들기
for(let i=0; i<N; i++){
    const line = stdin.shift().split(" ").map(a => +a)
    map.push(line)
}

function dfs (y=0, x=0) {
    let location = map[y][x]

    if(location === -1){
        return true;
    }

    if(!location){
        return false;
    }

    if(x+location < N){
        let result = dfs(y,x+location)
        if(result) return true;
    }
    if(y+location < N){
        let result = dfs(y+location , x) 
        if(result) return true;
    }

    return false;

    
}


dfs() ? console.log("HaruHaru"):console.log("Hing")
