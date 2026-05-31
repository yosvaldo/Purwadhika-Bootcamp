//1st page
//no. 1
//get the lowest, highest and average value in the array

// function analyzeNumbers(numbersArray: number[]) : number {
//     const n = numbersArray.length;

//     if(n === 0) {
//         return "Please provide an array with at least one number";
//     }

//     let lowest = numbersArray[0];
//     let highest = numbersArray[0];
//     let sum = 0;

//     for(let i = 0; i < n; i++){
//         sum += numbersArray[i];

//         if(numbersArray[i] < lowest){
//             lowest = numbersArray[i];
//         }

//         if(numbersArray[i] > highest) {
//             highest = numbersArray[i];
//         }
//     }

//     const average = sum / n;

//     return {
//         lowest : lowest,
//         highest : highest,
//         average : average
//     };
// };

// const userScores = [12, 5, 23, 18, 4, 45, 32];
// const resultA = analyzeNumbers(userScores);
// console.log(resultA);

//no. 2
//takes an array & returns a string by concatenating, separated by comma and the last word by an 'and'
// function wordsList (wordsArray: string[]) : string[] {
//     const n = wordsArray.length;

//     if (n === 0) return "";

//     if (n === 1) return wordsArray[0];

//     let resultString = wordsArray[0];

//     for (let i = 1; i < n; i++) {

//         if (i === n - 1) {
//             resultString += ", and " + wordsArray[i];
//         } else {
//             resultString += ", " + wordsArray[i];
//         }
//     }
//     return resultString;
// }

// const items = ["apple","banana","cherry","date"];
// console.log(wordsList(items));

//no. 3
//return the second smallest number
// const secondSmallest = (numbers: number[]): number => {
//     let smallest = Infinity;
//     let secondSmallest = Infinity;

//     for (let i = 0; i < numbers.length; i++) {
//         let current = numbers[i];

//         if (current < smallest) {
//             secondSmallest = smallest;
//             smallest = current;
//         } else if (current < secondSmallest && current !== smallest) {
//             secondSmallest = current;
//         }
//     }
//     return secondSmallest;
// };

// const numbers = [5, 3, 1, 7, 2, 6];
// console.log(secondSmallest(numbers));

//no. 4
//calculate each element in the same position from two arrays of integer
// const sumArrays = (array1: number[], array2: number[]): number[] => {
//     let result: number[] = [];

//     for (let i = 0; i < array1.length; i++) {
//         let current = array1[i] + array2[i];
//         result[i] = current;
//     }
//     return result;
// };

// console.log(sumArrays([1, 2, 3], [3, 2, 1]));

//no. 5
//add element to the end of array, element should be added if it is not already in the array
const addElement = (array: number[], newElement: number): number[] => {
    let alreadyExists = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === newElement) {
            alreadyExists = true;
            break;
        }
    }

    if (alreadyExists === false) {
        array[array.length] = newElement;
    }

    return array;
};

console.log(addElement([1, 2, 3, 4], 4));
console.log(addElement([1, 2, 3, 4], 7));

//2nd page
//no. 1