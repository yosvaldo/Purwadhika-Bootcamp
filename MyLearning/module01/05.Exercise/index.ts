//Callback Function

//forEach have callbacks which 3 parameters consist of value, index, array

const arrayMap = (
    callback: (value: any, index: number, array: any[]) => any,
    ...arr: any[]
): any[] => {
    const copy = [...arr];
    let result: any[] = [];

    for (let value of copy) {
        result.push(callback(value, copy.indexOf(value), copy));
    }
    return result;
};

//Example
const numbers: number[] = [1,2,3,4,5];
const mapToTen = (value: number) => value * 10;
const mapToString = (value: number) => `Number: ${value}`;

console.log(arrayMap(mapToTen, ...numbers));
console.log(arrayMap(mapToString, ...numbers));
console.log(arrayMap((value) => value ** 2, ...numbers));

//Similiarity with built-in map
console.log("Built-in map: ", numbers.map(mapToTen));

//Filter
const filteredOdd = numbers.filter((n) => n % 2 !== 0);
console.log("Filter: ", filteredOdd);
console.log("Filter doesn't change original array: ", numbers);

//Reduce
const sum = numbers.reduce((prev: number, curr:number) => {
    return (prev += curr);
}, 0);

console.log("Reduce: ", sum);

//Sort
const randomNumbers: number[] = [5, 2, 9, 1, 5, 6];
const sortedNumbers = randomNumbers.sort((a, b) => a - b);
console.log("Sorted Numbers: ", sortedNumbers);
console.log("Original Random Numbers: ", randomNumbers);

//Push, Unshift using Spread Operator
const registeredUsers: string[] = ["John", "Jane", "Doe"];

const updatedUsersPush = [...registeredUsers, "Alice"];

const updatedUsersUnshift = ["Bob", ...registeredUsers];

console.log("Updated Users (Push): ", updatedUsersPush);
console.log("Updated Users (Unshift): ", updatedUsersUnshift);
console.log("Original Registered Users: ", registeredUsers);

//Destructuring Array
const [name1, name2, name3, name4] = registeredUsers;

console.log(`Registered Users: ${name1}, ${name2}, ${name3}, ${name4 || "4th name not defined"}`);

//Unshift using destructuring array
const [firstUser, ...users] = registeredUsers;

console.log("Remained Users after Unshift: ", users, "| First User: ", firstUser);

//Pop using destructuring array
const [...usersCopy] = registeredUsers;
const lastUser = usersCopy.pop();

console.log("Remained Users after Pop: ", usersCopy, "| Last User: ", lastUser);
console.log("Original Registered Users: ", registeredUsers);

//Closure
//A function that has access to variable outside their scope, even after the outer function has finished executing
const greeting = (name: string) => {
    const greet: string = `Hello`;
    return () => {
        return `${greet}, ${name}!`;
    };
};

console.log(greeting("John")());

//Currying
//Functional Programming technique where a function return another function with another parameter
const arrayFilter = (...arr: any[]): CallableFunction => {
    return (
        callback: (value: any, index: number, array: any[]) => boolean,
    ): any[] => {
        let result: any[] = [];
        for (let value of arr) {
            if (callback(value, arr.indexOf(value), arr)) {
                result.push(value);
            }
        }
        return result;
    };
};

const filterEven = arrayFilter(...numbers);
console.log(
    "Curried Filter: ",
    filterEven((n:number) => n % 2 === 0),
);

//Nested Functions
//Function that inside of it there is another declaration of function
const getMessage = (firstName: string): string => {
    const sayHello = (): string => {
        return `Hello, ${firstName}!`;
    }

    const welcomeMessage = (): string => {
        return "Welcome to the world of functional programming!";
    };

    return `${sayHello()} ${welcomeMessage()}`;
};

console.log(getMessage("Doe"));

//Recursion
//A function that call itself to solve a problem, need base case to prevent infinite loop
const factorial = (n: number): number => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

console.log("The result of factorial recursion: ", factorial(5));