function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((v) => parseInt(v));
}