// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

//첫번째 수를 받고
//두번째 줄을 배열로 만들어서 숫자로 바꾸고
//reduce 를 통해 최소값과 최대값을 나타내면 된다.


const originArray = stdin[1].split(" ").map((a) => Number(a))

const max = originArray.reduce((acc , cur) => acc < cur ? cur: acc)
const min = originArray.reduce((acc , cur) => acc < cur ? acc: cur)

console.log(min , max)