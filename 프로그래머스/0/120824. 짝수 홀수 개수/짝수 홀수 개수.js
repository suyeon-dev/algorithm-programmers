function solution(num_list) {
    let answer = [];
    let odd = 0, even = 0;
    for(let i=0;i<num_list.length;i++){
        let answer = (num_list[i]%2 === 0) ? even++:odd++;
    }
    return [even,odd];
}