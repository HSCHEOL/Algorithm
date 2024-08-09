function solution(A, B) {
A = A.sort((a, b) => a - b);  // 오름차순 정렬
  B = B.sort((a, b) => b - a);  // 내림차순 정렬
  let sum = 0;
  for (i = 0; i < A.length; i++) {
    sum += A[i] * B[i];
  }
  return sum;
}