function solution(s1, s2) {
    let answer = 0;
    answer = s1.filter(i => s2.includes(i)).length;
    return answer;
}