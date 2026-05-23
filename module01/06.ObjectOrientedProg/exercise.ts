//function to calculate array of student data
//properties: name/string, email/string, age/date, score/number
//parameters: array of student

//return values:
//object with this following properties:
//score: highest, lowest, average
//age: highest, lowest, average

// interface Student {
//     name: string;
//     email: string;
//     age: Date;
//     score: number;
// }

// interface CalculationResult {
//     score: {highest: number; lowest: number; average: number};
//     age: {highest: number; lowest: number; average: number};
// }

// function calculateStudentData(students: Student[]): CalculationResult {
//     if (students.length === 0) {
//         return {
//             score: {highest: 0, lowest: 0, average: 0},
//             age: {highest: 0, lowest: 0, average: 0}
//         };
//     }

//     const currentYear = new Date().getFullYear();

//     const scores = students.map(s => s.score);

//     const ages = students.map(s => {
//         const birthYear = s.age.getFullYear();
//         return currentYear - birthYear;
//     });

//     const highestScore = Math.max(...scores);
//     const lowestScore = Math.min(...scores);
//     const totalScore = scores.reduce((sum, score) => sum + score, 0);
//     const averageScore = totalScore / students.length;

//     const highestAge = Math.max(...ages);
//     const lowestAge = Math.min(...ages);
//     const totalAge = ages.reduce((sum, age) => sum + age, 0);
//     const averageAge = totalAge / students.length;

//     return {
//         score: {
//             highest: highestScore,
//             lowest: lowestScore,
//             average: averageScore
//         },
    
//         age: {
//             highest: highestAge,
//             lowest: lowestAge,
//             average: averageAge
//         }
//     };
// }

// const classList: Student[] = [
//     {name: "Andy", email: "andy@example.com", age: new Date("2005-05-05"), score: 88},
//     {name: "Beatrice", email: "beatrice@example.com", age: new Date("2006-07-03"), score: 97},
//     {name: "Charlie", email: "charlie@example.com", age: new Date("2007-01-22"), score: 76}
// ];

// console.log(calculateStudentData(classList));

//to create transaction
//Product class: Properties: Name & Price
//Transaction class: Properties: Total & Product: All Product & Qty
//Add to cart method -> add product to transaction
//Show total method -> show total current transaction
//Checkout method -> finalize transaction, return transaction data

class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    };
}