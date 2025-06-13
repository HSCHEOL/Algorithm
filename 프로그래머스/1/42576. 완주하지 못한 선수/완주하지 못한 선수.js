function solution(participant, completion) {
    const map = new Map()
    
    for(people of participant){
        if(map.has(people)){
            map.set(people, map.get(people) + 1)
        }else {
            map.set(people,1)
        }
    }
    
    for(people of completion){
        if(map.has(people)){
            map.set(people , map.get(people) - 1)
            if(map.get(people) == 0){
                map.delete(people)
            }
        }
    }
    
    const answer = [...map.keys()].join("")
    
    return answer
    
    
}