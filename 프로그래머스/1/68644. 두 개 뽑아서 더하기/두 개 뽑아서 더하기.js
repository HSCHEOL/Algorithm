function solution(numbers) {
  let answer = [];
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer.sort();

  let answer2 = answer.filter(
    (value, index) => answer.indexOf(value) === index
  );

  return answer2.sort((a, b) => a - b);
}