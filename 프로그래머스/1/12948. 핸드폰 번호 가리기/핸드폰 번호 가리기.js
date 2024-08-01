function solution(phone_number) {
  return phone_number.split("").fill("*", 0, -4).join(""); //[0] 부터 [-4]까지
}