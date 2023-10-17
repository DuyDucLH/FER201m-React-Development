import { useState } from 'react';

export function Car() {
	const [inputs, setInputs] = useState({}); //initial state is empty object
	const [car, setCar] = useState({
		brand: "Ford",
		model: "Mustang",
		year: "1964",
		color: "red"
	});

	const updateColor = (newColor) => {
		setCar(previousState => { //because setState will rewrite state, so we need spread operator to keep other properties, only change color attribute
			return { ...previousState, color: newColor }
		});
	}

	const handleChange = (event) => {
		const name = event.target.name;   //name of input
		const value = event.target.value; //value of input
		setInputs(values => ( //setInputs is a function, values is a parameter
			{ ...values, [name]: value }   //computed property name
			// By using [name], you're updating a specific property of the state object based on the input's name. This is important in a form with multiple input fields, where each input's value should be stored in the corresponding property of the state object.
		));
		updateColor(inputs.color);
	}

	//general submit handle by DOM, so using React need to preventDefault.
	const handleSubmit = (event) => {
		event.preventDefault();
		updateColor(inputs.color);
		setInputs({}); //reset input
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Enter new color:
					<input
						type="text"
						name="color"
						value={inputs.color || ""}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" />
			</form>

			<h1>My {car.brand}</h1>
			<p>
				It is a {car.color} {car.model} from {car.year}.
			</p>
		</>
	)
}