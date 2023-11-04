import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

export default function Cart({ user }) {
	const navigate = useNavigate();
	const [cart, setCart] = useState([]);
	const [search, setSearch] = useState('');
	const cartFilter = cart.products && cart.products.filter((product) => {
		return product.title.toLowerCase().includes(search.toLowerCase()) ||
			product.title.toLowerCase().startsWith(search.toLowerCase());
	});

	const [total, setCartTotal] = useState(0);
	const [discountedTotal, setCartDiscountedTotal] = useState(0);

	useEffect(() => {
		if (user) {
			fetch('https://dummyjson.com/carts/user/' + user.id)
				.then(res => res.json())
				.then(json => {
					setCart(json.carts[0]);
					setCartTotal(json.carts[0].total);
					setCartDiscountedTotal(json.carts[0].discountedTotal);
				})
		} else {
			navigate('/login')
		}
	}, [user]);

	function handleSearch(e) {
		setSearch(e.target.value);
	}

	return (
		<Container>
			<Row>
				<Col className="text-center">
					<h1>Infomation of Cart</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h5>Username: {user && user.username}</h5>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col style={{ padding: '0px 20vw' }}>
					<Form.Control type="text" placeholder="Enter title to search..." onChange={handleSearch} />
				</Col>
			</Row>
			<Row>
				<Col>
					<Table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Title</th>
								<th>Price</th>
								<th>Qtt</th>
								<th>Total</th>
								<th>Discounted Price</th>
								<th>Image</th>
							</tr>
						</thead>
						<tbody>
							{cart.products && cartFilter.map((product) => (
								<Product key={product.id} product={product} setCartTotal={setCartTotal} setCartDiscountedTotal={setCartDiscountedTotal} />
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Total: {total}</h4>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Discounted Total: {discountedTotal}</h4>
				</Col>
			</Row>
		</Container >
	);
};
