//create triangle pattern according to the height

// function triangle(height: number) {
//     let lastValue: number = 1;
//     let result: string = "";
//     for (let i=1; i<=height; i++) {
//         if (i === 1) {
//             result += `0${i}\n`;
//             lastValue++;
//         }
//         else {
//             for (let j=1; j<=i; j++) {
//                 result += `${lastValue.toString().padStart(2, "0")} `;
//                 lastValue++;
//             }
//             result += "\n";
//         }
//     }
//     return result;
// }
// console.log(triangle(5));


//multiple by 3 : replace with Fizz, multiple by 5 : replace with Buzz, multiple by both 3 and 5 : replace with FizzBuzz

// const fizzbuzz = (n: number, str: string): string[] => {
//     let result: string[] = [];
//     for (let i=1; i<=n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push("FizzBuzz");
//         }
//         else if (i % 3 === 0) {
//             result.push("Fizz");
//         }
//         else if (i % 5 === 0) {
//             result.push("Buzz");
//         }
//         else {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log("FizzBuzz Result: ", fizzbuzz(10));

//calculate BMI

// const index = (weight: number, height: number): string => {
//     let bmi = weight / (height * height);
//     if (bmi < 18.5){
//         return "less weight";
//     }
//     else if (bmi < 24.9) {
//         return "ideal";
//     }
//     else if (bmi <29.9) {
//         return "overweight";
//     }
//     else if (bmi <39.9) {
//         return "very overweight";
//     }
//     else {
//         return "obesity";
//     }
// };

// console.log("BMI result: ", index(84, 1.72));

//remove all odd numbers and return new array with only even numbers

// const evenNumbers = (numbers: number[]): number[] => {
//     let result: number[] = [];
//     for (let number of numbers) {
//         if (number % 2 === 0) {
//             result.push(number);
//         }
//     }
//     return result;
// }

// console.log("Even numbers: ", evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//split a string and convert it into an array of words

// const splitString = (str: string): string[] => {
//     let result: string[] = [];
//     let word: string = "";
//     for (let n of str) {
//         if (n === " ") {
//             result.push(word);
//             word = "";
//         }
//         else {
//             word += n;
//         }
//     }
//     result.push(word);
//     return result;
// }

// console.log("Split string result: ", splitString("Hello World"));

const stringSplitter = (str: string, delimiter: string = " ") : string[] => {
    return str.split(delimiter);
};

console.log(stringSplitter("Hello World"));
console.log(stringSplitter("apple,banana,cherry", ","));
console.log(stringSplitter("one-two-three", "-"));