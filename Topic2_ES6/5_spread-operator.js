//Mục đích của spread operator là để tách các phần tử của mảng ra thành từng phần tử riêng lẻ

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(`newNumbers: ${newNumbers}`);

const user_origin = [
	{ name: 'John', age: 20 },
	{ name: 'Jill', age: 30 },
	{ name: 'Peter', age: 40 },
	{ 'count': 3 }
];

const user_current = [...user_origin, { name: 'Jack', age: 50 }];

console.log(`user_current: ${JSON.stringify(user_current)}`);

//--------------------//

const students = [
	{ 'id': 1, 'name': 'John', 'age': 20, 'gender': true },
	{ 'id': 2, 'name': 'John', 'age': 20, 'gender': true },
	{ 'id': 3, 'name': 'John', 'age': 20, 'gender': true },
	{ 'id': 4, 'name': 'John', 'age': 20, 'gender': true },
	{ 'id': 5, 'name': 'John', 'age': 20, 'gender': true }
];

function getAllStudents(...students) {
	console.log(`students: `);
	for (let student of students) {
		console.log(`\t${JSON.stringify(student)}`);
	}

}

getAllStudents(...students);
