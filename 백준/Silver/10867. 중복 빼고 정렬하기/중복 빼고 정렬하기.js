const fs = require('fs');
const [N, ...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

//set으로 중복 제거하고 sort()로 오름차순 정렬하기
const numberSet = new Set()
const numberArray = stdin[0].split(" ").map(a => Number(a)).forEach(a => numberSet.add(a))
const newArray = [...numberSet].sort((a,b) => a-b)

console.log(newArray.join(" "))