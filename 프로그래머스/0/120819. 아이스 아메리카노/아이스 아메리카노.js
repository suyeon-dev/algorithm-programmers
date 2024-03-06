function solution(money) {
    const maxCup = Math.floor(money/5500);
    const rest = money-(5500*maxCup);
    return [maxCup, rest];
}