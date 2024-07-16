let c=0;

function solution(a, b) {
  while (a < b) {
    c = c + a;
    ++a;
  } 
    
  while (b <= a) {
      c = c+b;
      ++b;
  }  
  return c;
}