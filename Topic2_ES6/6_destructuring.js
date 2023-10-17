//Object destructuring
const person = {
	name: 'John',
	age: 20,
};

//P1: Sử dụng tên các thuộc tính để làm thuộc tính cho object mới
// const { name } = person;
// console.log(`name: ${name}`);

//P2: Sử dụng tên các thuộc tính để làm thuộc tính cho object mới và đổi tên thuộc tính
// const { name: personName } = person;
// console.log(`personName: ${personName}`);

//Ngoài ra: Có thể bổ sung các thuộc tính mới cho đối tượng cần định nghĩa
// const { name, age, gender = true } = person;
// const newPerson = { name, age, gender };
// console.log(`newPerson: ${JSON.stringify(newPerson)}`);

//Array destructuring
const data = [
	{
		students: [
			{ id: 1, name: 'John', age: 20, class_id: 1, course_id: 1 },
			{ id: 2, name: 'Jill', age: 30, class_id: 1, course_id: 2 },
			{ id: 3, name: 'Peter', age: 40, class_id: 2, course_id: 1 }
		]
	},
	{
		classes: [
			{ id: 1, name: 'SE1742' },
			{ id: 2, name: 'SE1731' },
			{ id: 3, name: 'SE1771' }
		]
	},
	{
		courses: [
			{ id: 1, name: 'FER201', credit: 3 },
			{ id: 2, name: 'SWP391', credit: 4 }
		]
	}
];

//data đang là một mảng, mỗi phần tử của mảng là một object
//destructuring cho mảng data thành 3 phần tử object
const [students, classes, courses] = data;

console.log("List of students: ");
//destructuring cho thuộc tính students: array của object students
const { students: listStudents } = students;
for (let student of listStudents) {
	console.log(student);
}
