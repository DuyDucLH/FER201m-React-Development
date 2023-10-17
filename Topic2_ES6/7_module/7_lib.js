let message = "Hello World";

const data = [
	{
		students: [
			{ id: 1, name: 'John', age: 20, class_id: 1, course_id: 1 },
			{ id: 2, name: 'Jill', age: 30, class_id: 1, course_id: 2 },
			{ id: 3, name: 'Duy', age: 40, class_id: 2, course_id: 1 },
			{ id: 4, name: 'Duy2', age: 40, class_id: 3, course_id: 2 },
			{ id: 5, name: 'Duy3', age: 40, class_id: 2, course_id: 1 },
			{ id: 6, name: 'Duy4', age: 40, class_id: 3, course_id: 2 },
			{ id: 7, name: 'Duy5', age: 40, class_id: 1, course_id: 1 },
			{ id: 8, name: 'Duy6', age: 40, class_id: 3, course_id: 2 },
			{ id: 9, name: 'Duy7', age: 40, class_id: 2, course_id: 1 },
			{ id: 10, name: 'Duy8', age: 40, class_id: 2, course_id: 2 }
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
const [students, classes, courses] = data;
const { students: listStudents } = students;
const { classes: listClasses } = classes;
const { courses: listCourses } = courses;

export { message, listStudents, listClasses, listCourses };