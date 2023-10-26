import { useEffect, useState } from 'react';
import { Table, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Product() {

	const [categories, setCategories] = useState([]);
	const [products, setProduct] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:9999/categories')
			.then(res => {
				setCategories(res.data)
				axios.get('http://localhost:9999/products')
					.then(res => setProduct(res.data))
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<Col>
			<h2>Product</h2>
			<p style={{textAlign: 'right'}}>
				<Button as={Link} to="/products/add">Create new product</Button>
			</p>
			<Table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Price</th>
						<th>Category</th>
						<th colSpan={2}></th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.name}</td>
							<td>{product.price}</td>
							<td>{categories.find(c => c.id === product.categoryId).name}</td>
							<td>
								<Link to={`/products/edit/${product.id}`}>Edit</Link>
							</td>
							<td>
								<Link to={`/products/delete/${product.id}`}>Delete</Link>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Col>
	);
};
