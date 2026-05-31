/* finding area of rectangle
area = length * width
*/

let length: number = 5;
let width: number = 3;
let area: number = length * width;
console.log(`Area of rectangle is ${area}`);

/* find perimeter of rectangle
perimeter = 2 * (length + width)
*/

let perimeter: number = 2 * (length + width);
console.log(`Perimeter of rectangle is ${perimeter}`);

/* find  diameter, circumference and area of circle
diameter = 2 * radius
circumference = 2 * PI * radius
area = PI * radius^2
*/

let radius: number = 5;
console.log(`Diameter of circle is ${2 * radius}`);

const PI: number = 3.14159;
console.log(`Circumference of circle is ${2 * PI * radius}`);

console.log(`Area of circle is ${PI * radius ** 2}`);

/* find angles of triangle
angleC = 180 - (angleA + angleB)
*/

let angleA: number = 80;
let angleB: number = 65;
console.log(`Angle C of triangle is ${180 - (angleA + angleB)}`);

/* convert days to years, months and days
1 years = 365 days
1 month = 30 days
*/

let dayA: number = 400;
let year1: number = Math.floor(dayA/365);
let month1: number = Math.floor((dayA % 365) / 30);
let day1: number = Math.floor((dayA % 365) % 30);
console.log(`${dayA} days is ${year1} year, ${month1} month, ${day1} day`);

let dayB: number = 366;
let year2: number = Math.floor(dayB/365);
let month2: number = Math.floor((dayB % 365) / 30);
let day2: number = Math.floor((dayB % 365) % 30);
console.log(`${dayB} days is ${year2} year, ${month2} month, ${day2} day`);

/* get difference between dates in days
latest date - earliest date
1 day = 24 hours = 24 * 60 minutes = 24 * 60 * 60 seconds = 24 * 60 * 60 * 1000 milliseconds
*/

const dateA: Date = new Date('2022-01-20');
const dateB: Date = new Date('2022-01-22');
const differenceInTime: number = Math.abs(dateB.getTime() - dateA.getTime());
const differenceInDays: number = differenceInTime / (1000 * 3600 * 24);
console.log(`The difference between dates is ${differenceInDays} days`);
