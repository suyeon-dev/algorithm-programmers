//문자열 배열로 변환 & 배열 요소 분리 -> 각 요소 숫자로 변환 ->각 자리의 숫자들 더하기


function solution(num_str){
    let num_array=Array.from(num_str)
    let sum = 0;
    for(let e of num_array){
        sum += Number(e)
    }
    return sum
}