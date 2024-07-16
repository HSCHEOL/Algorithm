function solution(map) {
  //BFS 사용 Queue
  
  const mapX = map[0].length; //map의 x 크기
  const mapY = map.length; //map의 y 크기
  const goalX = mapX - 1; //목표 지점
  const goalY = mapY - 1;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const queue = []; //FIFO
  queue.push([0, 0, 1]); //처음 시작 지점과 이동횟수

  while (queue.length > 0) {
    const [curY, curX, move] = queue.shift(); //큐의 첫번째 값 제거
    if (curX === goalX && curY === goalY) return move;
      
    else {
    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];
      if (ny >= 0 && ny < mapY && nx >= 0 && nx < mapX && map[ny][nx] === 1) {
        //전진가능
        queue.push([ny, nx, move + 1]);
        map[ny][nx] = 0; // 다시 돌아갈 수 없다.
      }
    }
    }
  }

  return -1;
}