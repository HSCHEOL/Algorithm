const fs = require('fs');
const [a, b, N, ...human] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const hum = human.map(line => line.split(" ").map(Number));
const switch_output = b.split(" ").map(Number);
const switch_number = Number(a);

function Man(switch_output, num) {
    for (let i = num; i <= switch_output.length; i += num) {
        switch_output[i - 1] = switch_output[i - 1] === 0 ? 1 : 0;
    }
}

function Girl(switch_output, num) {
    let index = num - 1;
    let left = index - 1;
    let right = index + 1;

    while (
        left >= 0 &&
        right < switch_output.length &&
        switch_output[left] === switch_output[right]
    ) {
        left--;
        right++;
    }

    for (let i = left + 1; i < right; i++) {
        switch_output[i] = switch_output[i] === 0 ? 1 : 0;
    }
}

for (let [gender, num] of hum) {
    if (gender === 1) {
        Man(switch_output, num);
    } else if (gender === 2) {
        Girl(switch_output, num);
    }
}

for (let i = 0; i < switch_output.length; i += 20) {
    console.log(switch_output.slice(i, i + 20).join(' '));
}