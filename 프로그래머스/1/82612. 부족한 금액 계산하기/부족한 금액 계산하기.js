function solution(price, money, count) {
  let totalPrice = 0;
  for (i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  return totalPrice - money > 0 ? totalPrice - money : 0;
}