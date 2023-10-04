function solution(n, k) {
    let netPrice = (12000*n)+(2000*k)
    if (0<n && n<10){
        return netPrice;
    } else if (10<=n && n<1000){
        return netPrice - Math.floor(n/10)*2000
    }
}