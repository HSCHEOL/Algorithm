const fs = require('fs');
const [NM , a , ...b] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const[N,M] = NM.split(" ")
const n_array = a.split(" ").map((a) => Number(a))
const m_array = b

//구간 합 배열
const sum_array=[]
n_array.reduce((a,c) => 
{
    sum_array.push(a+c) 
    return a+c
} , 0)
sum_array.unshift(0)
const answer = []

for(let k=0; k<m_array.length; k++){
    const [i, j] = m_array[k].split(" ").map((a) => Number(a))
    answer.push(sum_array[j] - sum_array[i-1])
}

console.log(answer.join("\n"))

