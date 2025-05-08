const fs = require('fs');
const [N, ...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


//단어의 길이 값을 추출한다.
//키를 영어 단어로 , 벨류를 영단어의 길이로 한다.
//사전으로 정렬 후 -> 숫자 값으로 정렬

const dictionary = new Map()

for(i=0; i<N; i++){
    dictionary.set(stdin[i] , stdin[i].length)
}

let sortDictionary = [...dictionary].sort().sort((a,b) => a[1] - b[1])

sortDictionary = sortDictionary.map(array => array[0])

console.log(sortDictionary.join('\n'))

