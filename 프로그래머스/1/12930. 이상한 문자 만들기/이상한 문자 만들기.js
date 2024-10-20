function solution(s) {
  let answer = [];
  const Array_s = s.split(" ");
  for (item of Array_s) {
    let Array_item = item.split("");
    const newArray = Array_item.map((a, i) =>
      i % 2 === 0 ? a.toUpperCase() : a.toLowerCase()
    );
    let word = newArray.join("");
    answer.push(word);
  }
  return answer.join(" ");
}