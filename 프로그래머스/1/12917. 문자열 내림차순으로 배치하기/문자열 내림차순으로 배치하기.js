function solution(s) {
  let Upperstr = [];
  let Lowerstr = [];

  for (let i of s) {
    if (i === i.toUpperCase()) {
      Upperstr.push(i);
    } else {
      Lowerstr.push(i);
    }
  }
  Upperstr = Upperstr.sort().reverse();
  Lowerstr = Lowerstr.sort().reverse();
  Lowerstr = Lowerstr.concat(Upperstr).join("");
  return Lowerstr;
}