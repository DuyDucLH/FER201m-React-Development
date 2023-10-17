//Basic syntax
const add = (a, b) => console.log(a + b);	//Anonymous function
const printMessage = () => console.log("Cac");
const getMessage = () => "Cac"; //Concise body
const getMessage1 = () => {	//Block body
	return "Cac";
};

const user = [
	{id: 1, name: "Cac Ban"},
	{id: 2, name: "Cac Ban 2"},
];

const ul = document.createElement("ul");
ul.id = "list";
user.forEach(({id, name}) => {
	const li = document.createElement("li");
	li.className = "item";
	li.textContent = `${id} - ${name}`;
	ul.appendChild(li);
});

document.getElementById("root").appendChild(ul);