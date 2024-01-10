function solution(n) {
    let sum = 0;
    let nString = n.toString().split("").map(Number);
    
    for(let i=0; i<nString.length; i++){
        sum += nString[i];
    }
    
    return sum
}