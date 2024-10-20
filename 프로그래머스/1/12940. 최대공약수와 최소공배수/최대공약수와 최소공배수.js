const GCD = (n, m, product, answer) => {
  //유클리드 호제법으로 최대공약수 구하기
  let largeNumber = Math.max(m, n);
  let smallNumber = Math.min(m, n);
  let remainder = largeNumber % smallNumber;

  if (remainder === 0) {
    answer.push(smallNumber); // 최대공약수 추가
    answer.push(product / smallNumber); // 최소공배수 추가
    return answer; // 결과 반환
  } else {
    return GCD(smallNumber, remainder, product, answer);
  }
};

function solution(n, m) {
  const product = n * m; // 두 수의 곱
  let answer = [];
  return GCD(n, m, product, answer); // GCD 호출 후 결과 반환
}