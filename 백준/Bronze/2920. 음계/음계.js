const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map((a) => +a)

if(stdin[0] == 1){
    let count = 1;

    for(let i=0; i<stdin.length; i++){
        if(stdin[i] == count){
            count++
            if(stdin[i] == 8){
                console.log('ascending')
            }
        } else if(stdin[i] != count){
            console.log('mixed')
            break;
        }
    }


} else if(stdin[0] == 8){
        let count = 8;

    for(let i=0; i<stdin.length; i++){
        if(stdin[i] == count){
            count--
            if(stdin[i] == 1){
                console.log('descending')
            }
        } else if(stdin[i] != count){
            console.log('mixed')
            break;
        }
    }


}else {
    console.log('mixed')
}