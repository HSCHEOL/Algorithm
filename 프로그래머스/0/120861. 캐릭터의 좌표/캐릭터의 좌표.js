function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  for (item of keyinput) {
    switch (item) {
      case "right":
        if (x < Math.floor(board[0] / 2)) x += 1;
        break;
      case "left":
        if (x > Math.ceil(-(board[0] / 2))) x -= 1;
        break;
      case "up":
        if (y < Math.floor(board[1] / 2)) y += 1;
        break;
      case "down":
        if (y > Math.ceil(-(board[1] / 2))) y -= 1;
        break;
    }
  }

  return [x, y];
}
