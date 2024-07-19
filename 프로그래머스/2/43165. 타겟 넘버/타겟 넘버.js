function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
  // dfs재귀함수의 탈출 조건: index == numbers.length되면 리턴.
    if (index == numbers.length) {
    // 만약 sum과 target이 같아지면 answer에 1을 더함.
      if (sum == target) answer++;
      return;
    }
   
    dfs(index + 1, sum + numbers[index]);
   //dfs(1,1)을 호출
   //dfs(1,1) 에서 다시: dfs(2, 2)와 dfs(2, 0)을 호출

   
    dfs(index + 1, sum - numbers[index]);
    //dfs(1, -1)을 호출
    //dfs(1, -1)에서 다시: dfs(2, 0)과 dfs(2, -2)을 호출
  }
  
  dfs(0, 0); //초기호출

  return answer;
}