function fibonacci(number) {
    const fibNum = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
    }
    return fibNum[number];
}

console.log(fibonacci(6));
console.log(fibonacci(8));
console.log(fibonacci(10));


//kendini çağıran fonksiyon
// function fibonacci(number) {
//     if (number <= 1) {
//         return number;
//     }
//     else {
//         return fibonacci(number - 1) + fibonacci(number - 2);
//     }
// }
// console.log(fibonacci(6));
// console.log(fibonacci(8));
// console.log(fibonacci(10));
