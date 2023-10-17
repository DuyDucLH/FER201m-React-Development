function hello(name = 'World') {
	console.log(`Hello ${name}!`);
}

hello(); // Hello World!
hello(undefined); // Hello World!
hello('John'); // Hello John!