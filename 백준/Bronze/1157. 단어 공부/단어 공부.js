const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().toLowerCase().split("");


let count = {}

for(i=0; i<stdin.length; i++){
    if(count[stdin[i]]){
        count[stdin[i]] += 1
    }
    else{
        count[stdin[i]] = 1
    }
}

let maxLetter = ""
let maxNumber = 0
let dup = false

for(let letter in count){
    if(count[letter] > maxNumber){
        dup = false
        maxNumber = count[letter]
        maxLetter = letter
    } else if(count[letter] == maxNumber) {
        dup = true
    }
        
}

if(!dup){
    console.log(maxLetter.toUpperCase())
}else if(dup){
    console.log("?")
}