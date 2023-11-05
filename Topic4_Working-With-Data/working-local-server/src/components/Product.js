import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Product() {
	const [categories, setCategories] = useState([]);
	const [products, setProduct] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	function getData() {
		axios.get('http://localhost:9999/categories')
			.then(res => {
				setCategories(res.data)
				axios.get('http://localhost:9999/products')
					.then(res => setProduct(res.data))
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	}

	function handleDetele(productId) {
		axios.delete('http://localhost:9999/products/' + productId)
			.then(res => {
				if (res.status === 200) {
					getData();
				}
			})
			.catch(err => console.log(err));
	}

	return (
		<Col>
			<h2>Product</h2>
			<p style={{ textAlign: 'right' }}>
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
								<Link onClick={() => handleDetele(product.id)}>Delete</Link>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Col>
	);
};
