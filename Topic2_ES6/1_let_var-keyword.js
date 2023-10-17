//#1: Phạm vi khai báo và sử dụng các biến
// for (var i = 0; i < 10; i++) {
// 	console.log("Inside block: " + i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// }
// console.log("Outside block: " + i); // 10

// for (let j = 0; j < 10; j++) {
// 	console.log("Inside block: " + j); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// }
// console.log("Outside block: " + j); // ReferenceError: j is not defined

//#2: Hạn chế nhầm lẫn với thuộc tính window 

// var a = 10;
// console.log("Var a: " + window.a); // 10

// let b = 20;
// console.log("Let b: " + window.b); // undefined

//#3: Tránh việc khai báo lại biến

// var a = 10;
// console.log("Var a: " + a); // 10
// var a = 20;

// let numbers = [1, 2, 3, "Hello", true];
// console.log(numbers);

// let person = {
// 	name: "John",
// 	age: 20,
// };
// console.log(person);

