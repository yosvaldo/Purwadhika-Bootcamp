// 1. Check whether a number is odd or even

// let num: number = 25;
// if (num % 2 === 0) {
//     console.log(`${num} is an even number`);
// }
// else {
//     console.log(`${num} is an odd number`);
// }

// 2. Check whether a prime number or not

// let num: number = 7;
// let isPrime: boolean = true;

// if (num <= 1) {
//     isPrime = false;
// }
// else {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//         else {
//             isPrime = true;
//         }
//     }
// }

// if (isPrime) {
//     console.log(`${num} is a prime number`);
// }
// else {
//     console.log(`${num} is not a prime number`);
// }

// 3. Find the sum
// let n: number = 5;
// let sum: number = 0;

// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(`The sum is ${sum}`);

// 4. Find the factorial
// let no: number = 6;
// let factorial: number = 1;

// for (let i = no; i >= 1; i--) {
//     factorial *= i;
// }
// console.log(`The factorial is ${factorial}`);

// 5. Print the first N fibonacci numbers
// let numb: number = 15;
// let a: number = 0;
// let b: number = 1;
// let c: number;

// console.log(`The first ${numb} Fibonacci numbers are:`);
// for (let i = 1; i <= numb; i++) {
//         if (i === 0) {
//             console.log(0);
//             continue;
//         }
//         else if (i === 1) {
//             console.log(0);
//             continue;
//         }
//         else {
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
//     }
// }