//Immutable will always make new address in memory
const a: string = "lala";
const b: string = a;
const c: string = b + a;

// console.log(a);
// console.log(c);

//Mutable will always make same address in memory
//Data saved in heap, variable saved in stack
const arr: any[] = [1, "two", true];

//Shallow copy
const arr2: any[] = arr;
const arr3: any[] = arr2;

//Semi deep copy using spread operator: ...
const arr4: any[] = [...arr];

//Deep copy
const arr5: any[] = structuredClone(arr);

arr2.push(a);
arr3.push(c);

// console.log(arr4);
// console.log(arr);

//String array
const strArr: string[] = ["one", "two", "three"];

//Number array
const numArr: number[] = [1, 2, 3];

numArr[0] *= 10;

//Remove last element of array
numArr.pop();

//Add element to end of array
numArr.push(9);

//Remove first element of array
numArr.shift();

//Add element to beginning of array
numArr.unshift(8);

//Splice to delete middle of array and add element in the middle
numArr.splice(1, 1, 11, 13, 15);

// console.log("Array numArr: ", numArr);

//Using length to get last index of array
// console.log(numArr[numArr.length -1]);

// console.log(numArr[1]);
// console.log(`string: ${strArr[1]} | number: ${numArr[0]+1}`);

//Length count number of element in array
// console.log(numArr.length);

let fruits: string[] = ["apple", "banana", "orange"];
let animals: string[] = ["cat", "dog", "rabbit"];
let selectedAnimal: string = "";

for (let fruit of fruits) {
    console.log(fruit);
}

for (let i = 0; i < animals.length; i++) {
    if (i === 2) {
        selectedAnimal = animals[i];
    }
}

//Callback function is a function that is called inside another function as an argument

fruits.forEach((value: string, i: number, array: string[]) => {
    console.log(`Index: ${i} | Value: ${value} | Array: ${array}`);
});

console.log("Selected animal: ", selectedAnimal);
