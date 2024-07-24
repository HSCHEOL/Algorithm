function solution(arr) {
    let sum = 0;
    for(const item of arr) {
        sum += item;
    }
    answer = sum / arr.length;
    
    return answer;
}