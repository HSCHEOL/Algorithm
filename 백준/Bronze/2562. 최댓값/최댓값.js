// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n"); //배열로 만들자 reduce 돌려야 하니까
//숫자로 바꿔야함


const answerArray = []

for(i=0; i<stdin.length; i++) {
    answerArray.push(Number(stdin[i]))
}

const answer = answerArray.reduce((a , b) => a < b ? b : a)
console.log(answer)
//answer이랑 같은걸 비교해야지

let index = 1;
for (i = 0; i < answerArray.length; i++) {
    if (answer == answerArray[i]) {
        console.log(index);
        break;
    } else {
        index += 1;
    }
}
