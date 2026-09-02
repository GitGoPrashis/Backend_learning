// synchronous and asynchronous operatiion in javascript. Synchronous operation block the exection of code until they are completed, while, asynchronous operations allow other code to run while waiting for a task to finsh. This is particaularly useful for tasks that take a long time to complete. 

// for synchronous code
// const getData = async () => {
//     console.log("Getting data...");

//     const data = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data received successfully!");
//         }, 3000);
//     });

//     console.log(data);
// };

// getData();

// console.log("Task 1...")
// setTimeout(() => {
//     console.log("Task 2..")
// }, 3000);

// console.log("Task 3...")

// 1.slimulate ordering process of any food items Like momo using both synchronous and asynchronous

// for synchronous code
// console.log("1. Customer orders momo");

// console.log("2. Restaurant prepares momo");

// console.log("3. Momo is ready");

// console.log("4. Customer receives momo");

// console.log("5. Customer eats momo");

// for asynchronous code

// console.log("1. Customer orders momo");
// setTimeout(() => {
//     console.log("2. momo is getting ready...")
// }, 2000);


// promis
// promis is an object that represents the eventual completion or failure of an asynchronous operation and its resulting values

// const orderMomo = async () => {

//     console.log("1. Customer orders momo");

//     const momo = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("2. Momo is ready");
//         }, 3000);
//     });

//     console.log(momo);

//     console.log("3. Customer receives momo");

//     console.log("4. Customer eats momo");
// };

// orderMomo();

// console.log("Restaurant is preparing the momo...");

// const promis = new Promise((resolve, reject)=>{
//     let success = true;
//     if (success) {
//         resolve("promise is fullfilling")

//     } else {
//         reject("Promise is rejected.")
//     }
// })

// promis.then((message)=>{
//     console.log(message)

// }).catch((error)=>{
//   console.log(error)
// })
 const checkout = new Promise((resolve, rejected)=>{
let sucess = false;
 setTimeout(() => {
    if (sucess) {
        resolve("the data is valide")
    } else {
        rejected("the data is invailde")
    }
    
 }, 3000);
 })
 checkout.then((message)=>{
    console.log(message)

 }).catch((error)=>{
    console.log(error)
 })

 