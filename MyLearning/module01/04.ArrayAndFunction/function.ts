//Function Declaration

//Function Hoisting
function addNoReturn(a: number, b: number): void {
    const sum = a + b;
    console.log(sum);
}

function diff(a: number, b: number): number {
    return a - b;
}

const result: number = diff(10, 4);

// console.log(result);

addNoReturn(5, 3);

//Function Expression
const multiply = (a: number, b: number): number => a*b;
//a & b parameter


const divide = (a: number = 0, b: number = 0): number => {
    if (!a || !b) return 0;
    return a/b;
};

// console.log(multiply(6, 7));
//6 & 7 argument
// console.log(divide(20, 4));
// console.log(divide());

const fibonacci = (n: number): number => {
    let a: number = 0;
    let b: number = 1;
    let result: number = 0;

    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            continue;
        }
        else if (i === 1) {
            continue;
        }
        result = a + b;
        a = b;
        b = result;
    }
    return result;
};

console.log("Fibonacci result: ", fibonacci(15));

const sum = (...numbers: number[]): number => {
    let result: number = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
};

console.log("Sum result: ", sum(50, 25, 70, 80, 100, 90, 76, 80, 1, 2, 3, 4, 5, 6));