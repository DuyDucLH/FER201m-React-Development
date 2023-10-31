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
			if (res.status === 201) {
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
				{/* <Form.Group>
					<Form.Label>ID</Form.Label>
					<Form.Control type="text" disabled />
				</Form.Group> */}
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter name" onChange={e => setPName(e.target.value)} />
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control type="number" placeholder="Enter price" onChange={e => setPPrice(e.target.value)} />
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>Category</Form.Label>
					<Form.Control as='select' defaultValue={'default'} onChange={e => setPCategoryId(e.target.value)}>
						<option value='default' disabled>-- Select a category --</option>
						{
							categories.map((category) => (
								<option key={category.id} value={category.id}>{category.name}</option>
							))
						}
					</Form.Control>
				</Form.Group>
				<br />
				<Button variant="primary" type="submit">Create</Button>
			</Form>
		</Col>
	);
};