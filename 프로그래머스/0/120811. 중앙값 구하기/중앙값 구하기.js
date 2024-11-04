function solution(array) {
    // 중앙값의 인덱스 찾기 예: (1, 2, 3) -> 평균값의 소수점 이하 버림
    const midIndex= Math.floor(array.length/2)
    // 배열 오름차순 정렬
    const newArray = array.sort(function(a,b){
        return a-b;
    })
    // 중앙값 리턴
    return newArray[midIndex]
}