import { useEffect, useState } from 'react';
import { Alert, Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductPost() {

	const [categories, setCategories] = useState([]);
	const [pName, setPName] = useState('');
	const [pPrice, setPPrice] = useState(0);
	const [pCategoryId, setPCategoryId] = useState(1);
	const [messages, setMessages] = useState([]);


	useEffect(() => {
		axios.get('http://localhost:9999/categories')
			.then(res => setCategories(res.data))
			.catch(err => console.log(err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:9999/products', {
			name: pName,
			price: parseInt(pPrice),
			categoryId: parseInt(pCategoryId)
		}).then(res => {
			if(res.status === 201){
				setMessages(['Product created successfully']);
			}
			console.log(res.data);
		}).catch(err => console.log(err));
	}

	return (
		<Col>
			<h2>Create a new product</h2>
			<p>
				<Link to="/products" className='btn btn-danger'>Back to product list</Link>
			</p>
			{messages.length > 0 && <Alert variant='success'>{messages[0]}</Alert>}
			<Form onSubmit={handleSubmit}>
				<label>ID</label>
				<Form.Control type="text" disabled/>
				<label>Name</label>
				<Form.Control type="text" placeholder="Enter name"  onChange={e => setPName(e.target.value)}/>
				<label>Price</label>
				<Form.Control type="number" placeholder="Enter price" onChange={e => setPPrice(e.target.value)}/>
				<br />
				<label>Category</label>
				<Form.Select onChange={e => setPCategoryId(e.target.value)}>
					<option>-- Select a category --</option>
					{
						categories.map((category) => (
							<option key={category.id} value={category.id}>{category.name}</option>
						))
					}
				</Form.Select>
				<br /> <br />
				<Button variant="primary" type="submit">Create</Button>
			</Form>
		</Col>
	);
};