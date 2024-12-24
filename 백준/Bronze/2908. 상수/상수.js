const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(" ");


//두 수를 뒤집고
//비교해서 큰 수를 말하게 해야한다.
const Num1 = stdin[0].split("").reverse().join("");
const Num2 = stdin[1].split("").reverse().join("");

console.log(Num1 > Num2 ? Num1 : Num2)