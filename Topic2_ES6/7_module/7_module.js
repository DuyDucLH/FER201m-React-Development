import * as data from './7_lib.js';

const classList = document.getElementById('classes');
const courseList = document.getElementById('courses');
const studentList = document.getElementById('students-table');

for (const classes of data.listClasses) {
	const { name } = classes;
	const li = document.createElement('li');
	li.className = 'list-group-item';
	li.innerHTML = `<a href='#'>${name}</a>`
	classList.appendChild(li);
}

for (const course of data.listCourses) {
	const { name } = course;
	const li = document.createElement('li');
	li.className = 'list-group-item';
	li.innerHTML = `<a href='#'>${name}</a>`
	courseList.appendChild(li);
}

function getClassName(class_id) {
	for (const clas of data.listClasses) {
		const { id, name } = clas;
		if (id === class_id) {
			return name;
		}
	}
}

function getCourseName(course_id) {
	for (const course of data.listCourses) {
		const { id, name } = course;
		if (id === course_id) {
			return name;
		}
	}
}

for (const student of data.listStudents) {
	const { id, name, age, class_id, course_id } = student;
	let studentData =
		`<tr>
		<td>${id}</td>
		<td>${name}</td>
		<td>${age}</td>
		<td>${getClassName(class_id)}</td>
		<td>${getCourseName(course_id)}</td>
	</tr>`;
	studentList.insertAdjacentHTML('beforeend', studentData);
}

function showStudents(listStudents) {
	studentList.innerHTML = '';
	for (const student of listStudents) {
		const { id, name, age, class_id, course_id } = student;
		let studentData =
			`<tr>
			<td>${id}</td>
			<td>${name}</td>
			<td>${age}</td>
			<td>${getClassName(class_id)}</td>
			<td>${getCourseName(course_id)}</td>
		</tr>`;
		studentList.insertAdjacentHTML('beforeend', studentData);
	}
}

classList.addEventListener('click', event => {
	if (event.target.tagName === 'A') {
		const className = event.target.innerText;
		const class_id = data.listClasses.find(clas => clas.name === className).id;
		filterStudentsByClass(class_id);
	}
});

courseList.addEventListener('click', event => {
	if (event.target.tagName === 'A') {
		const courseName = event.target.innerText;
		const course_id = data.listCourses.find(course => course.name === courseName).id;
		filterStudentsByCourse(course_id);
	}
});

function filterStudentsByClass(class_id) {
	const filteredStudents = data.listStudents.filter(student => student.class_id === class_id);
	showStudents(filteredStudents);
}

function filterStudentsByCourse(course_id) {
	const filteredStudents = data.listStudents.filter(student => student.course_id === course_id);
	showStudents(filteredStudents);
}