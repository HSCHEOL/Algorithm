function solution(arr1, arr2) {
  let answer = [];
  const length = arr1.length;
  const length2 = arr1[0].length;

  for (i = 0; i < length; i++) {
    let row = [];
    for (k = 0; k < length2; k++) {
      row.push(arr1[i][k] + arr2[i][k]);
    }
    answer.push(row);
  }
  
  return answer;
}