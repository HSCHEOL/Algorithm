let str = '';

function make3(n){ // 3진법 계산 함수
    if(n<3){
        str = str+String(n);
        return;
    }
    else{
        str = str + String(n%3)
        make3(parseInt(n/3));
    }
}

function make10(str){ // 10진법 계산 함수
    let num = 0;
    for(let i=(str.length-1); i>=0; i--){
        let p = str.length-i-1;
        if(p == 0) num += Number(str[i])
        else{
            let n = Math.pow(3, str.length-i-1)
            num += Number(n* str[i])
    
        }
    }
    return num;
}

function solution(n) {
    make3(n);
    return make10(str);
}