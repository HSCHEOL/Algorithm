const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

for(let i=0; i<=stdin.length;){
    if(stdin[i].indexOf(" ") != -1){
        let count = 0
        if(stdin[i] == "0 0"){
            break;
        }
        else{
        const [N,M] = stdin[i].split(" ").map(a => +a);
        const set = new Set();

        for(let k=0; k<N; k++){
                set.add(stdin[i+1+k])
        }
        for(let j=0; j<M; j++){
            if(set.has(stdin[i+1+N+j])) count++;
        }

            
            console.log(count)
            i += N+M+1
        }
    } else {
        i++;
    }
}




