const fs = require('fs');
const [N, ...stdin] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const queue = []
let head = 0
let answer = []

for (let command of stdin) {
    if (command.startsWith('push')) {
        const [, num] = command.split(' ')
        queue.push(Number(num))
    } else if (command === 'pop') {
        if (head === queue.length) {
            answer.push(-1)
        } else {
            answer.push(queue[head])
            head += 1
        }
    } else if (command === 'size') {
        answer.push(queue.length - head)
    } else if (command === 'empty') {
        answer.push(queue.length - head === 0 ? 1 : 0)
    } else if (command === 'front') {
        answer.push(queue.length - head === 0 ? -1 : queue[head])
    } else if (command === 'back') {
        answer.push(queue.length - head === 0 ? -1 : queue[queue.length - 1])
    }
}

console.log(answer.join('\n'))