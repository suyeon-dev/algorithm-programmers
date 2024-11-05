function solution(numbers) {
    // 오름차순 정렬
    let arr = numbers.sort(function(a,b){
        return a-b;
    })
    //arr.length-1 과 arr.length-2의 곱
    return arr[arr.length-1]*arr[arr.length-2]
}