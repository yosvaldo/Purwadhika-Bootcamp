//Basic Async
// console.log("Task 01");
// setTimeout(() => {
//     console.log("Task 02");
// }, 3000);
// console.log("Task 03");

//Callback
// const calculator = (a: number, b: number, cb: (result: number) => void) => {
//     cb(a + b);
// };

// calculator(2, 3, (result) => console.log("Callback Result: ", result+5));

//Callback with Closure
// const add10 = (n:number): ((result: number) => void) => {
//     const sum = n + 10;
//     return (result:number): void => {
//         console.log("Callback Result: ", result + sum);
//     };
// };

// const display = add10(10);

// calculator(4, 5, add10(10));

//Promise
// const dataFromServer = new Promise<string>((resolve, reject) => {
//     const randomSuccess = Math.random() > 0.5;
//     setTimeout(() => {
//         if(randomSuccess) {
//         resolve ("Data received from server");
//         } else {
//         reject ("Failed to fetch data");
//         }
//     }, 3000);
// });


//Then & Catch
// dataFromServer
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//Async/Await
// const fetchDataFromServer = async () => {
//     let isLoading: boolean = true;
//     try {
//         if (isLoading) {
//             console.log("Loading data from server...");
//         }
//         const data = await dataFromServer;
//         console.log("Data received: ", data);
//     } catch (error) {
//         console.log("Error fetching data: ", error);
//     } finally {
//         isLoading = false;
//         console.log("Loading completed");
//     }
// };

// fetchDataFromServer();

//Real Case
// const fetchData = async() => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const users = await response.json()
//         console.log(users)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData();

// const fetchData = async(): Promise<Object> => {
//     try {
//         const response = await fetch('https://jsconplaceholder.typicode.com/users')
//         let users = null;
//         if (response.ok) {
//             users = await response.json();
//         } else {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return users;
//     } catch (error) {
//         return { error };
//     }
// };

//JSON
const jsonExample = '{"name": "John", "age": 30, "city": "New York"}';
const parsedData = JSON.parse(jsonExample);
console.log("Parsed Data: ", parsedData);

const toJSON = JSON.stringify(parsedData);
console.log(toJSON);

