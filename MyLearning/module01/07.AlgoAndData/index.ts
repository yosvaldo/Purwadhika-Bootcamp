//1. convert Excel sheet column title to its corresponding column number

// function toNumber (column: string): number => {
    
// }

//2. find number that appears once

// const once = (nums: []): number[] => {
//     const result: number[] = [];
    
//     for(let i = 0; i < nums.length; i++) {
//         let check = nums[i];
        
//         if (nums.indexOf(check) === nums.lastIndexOf(check)) {
//             result.push(check);
//         }
//     }

//     return result;
// };

// console.log(once([4, 1, 2, 1, 2]));

//3. if anagram return true

// const anagram = (s: string, t: string): boolean => {
//     const answer: boolean = true;

//     if (s.length !== t.length) {
//         return false;
//     }

//     const sortedS = s.split("").sort().join("");
//     const sortedT = t.split("").sort().join("");

//     return sortedS === sortedT;
// };

// console.log(anagram("anagram", "nagaram"));
// console.log(anagram("rat", "car"));

//4. n steps to reach the top. each step either climb 1 or 2 steps. in how many distinct ways climb the top?

// const climb = (n: number): number => {
    // if (n <= 2) return n;

    // let stepMinusTwo = 1;
    // let stepMinusOne = 2;
    // let currentWays = 0;

    // for (let i = 3; i <= n; i++) {
    //     currentWays = stepMinusOne + stepMinusTwo;

    //     stepMinusTwo = stepMinusOne;
    //     stepMinusOne = currentWays;
    // }
    // return currentWays;
// }

// console.log(climb(4));
// console.log(climb(5));

//1. array nums size of n, return the majority element which appear more than n/2 times

// const majority = (n: number, nums: number[]): number => {
    
//     for (let i = 0; i < nums.length; i++) {
//         let check = nums.indexOf(i);

//         if (nums.indexOf(i)) {
            

//         }
//     }
// }