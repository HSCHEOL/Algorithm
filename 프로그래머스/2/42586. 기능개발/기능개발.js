function solution(progresses, speeds) {
    let answer = [];
    let complete = []
    let count = 1
    
    for(let i=0; i<progresses.length; i++){
        const a = 100 - progresses[i]
        const b = Math.ceil(a/speeds[i])
        
        complete.push(b)
    }
    
    
    let bignumber = complete[0]
    
    for(let j=0; j<complete.length; j++){
        
        if(bignumber >= complete[j+1]){
            count ++;
        }else if(bignumber < complete[j+1]){
            bignumber = complete[j+1]
            answer.push(count);
            count = 1;
        }else if(complete[j+1] == undefined){
            answer.push(count);
        }
        
    }
    
    return answer;
    
}

//큰 수를 유지해야함.

//자기보다 작은게 다음에 오면 count++
//자기보다 큰 걸 만났으면 누적된 count 값을 answer.push 하고 다시 count = 1로 한 후, 계속 하기
//배열이 끝나도 answer.push 해주기.


//앞에 있는 기능이 완성 안되면 배포 불가
//앞에 보다 빠르면 앞에 것과 함께 배포가 된다.
//100 - 93 = 7
//ceil(7 / 1)
//그 값이 작업 완료 후 배포가 가능한 날짜입니다.
//그 값을 배열에 넣고, reduce로 작은거 세면 된다.

