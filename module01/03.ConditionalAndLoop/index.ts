// const age: number = 16;

// if (age >= 17) {
//     console.log("You are an adult");
// }
// else {
//     console.log("You are a minor");
// }

const grade: string = "A";

// if (grade === "A") {
//     console.log("Excellent");
// }
// else if (grade === "B") {
//     console.log("Good");
// }
// else if (grade === "C") {
//     console.log("Fair");
// }
// else if (grade === "D") {
//     console.log("Poor");
// }
// else {
//     console.log("Fail");
// }

// let username: string = "";
// let password: string = "";

// let registeredUsername: string = "admin";
// let registeredPassword: string = "admin123";

// if (!username || !password) {
//     console.log("Invalid credentials");
// }

// if (username === registeredUsername) {
//     console.log("Username is correct");
// }
// else {
//     console.log("Username is incorrect");
// }

// Switch Case

// switch (grade) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Good");
//         break;
//     case "C":
//         console.log("Fair");
//         break;
//     case "D":
//         console.log("Poor");
//         break;
//     default:
//         console.log("Fail");
// }

// Short Circuit Evaluation

// console.log(true && "Hello");
// console.log(false && "Hello");

// console.log(true || "Hi");
// console.log(false || "Hi");

let numberToCheck: number = 10;
let isEven: boolean = numberToCheck % 2 === 0;
let message: string = isEven ? "Even" : "Odd";
console.log("is Even? " , message);
