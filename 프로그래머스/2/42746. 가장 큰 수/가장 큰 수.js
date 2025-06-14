function solution(numbers) {

    numbers = numbers.map(a => String(a)).sort((a,b) => (b+a).localeCompare(a+b)).join("")
    
    return numbers == 0 ? '0' : numbers
}

//303.localeCompare(330)
//(a+b).localeCompare(b+a)


