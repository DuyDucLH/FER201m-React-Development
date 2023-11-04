import { Col, Container, Form, Row, Spinner, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Cart({ user }) {
	const [cart, setCart] = useState([]);
	const [search, setSearch] = useState('');
	const cartFilter = cart.products && cart.products.filter((product) => {
		return product.title.toLowerCase().includes(search.toLowerCase()) ||
			product.title.toLowerCase().startsWith(search.toLowerCase());
	});
	const [total, setCartTotal] = useState(0);
	const [discountedTotal, setCartDiscountedTotal] = useState(0);

	const [loadingData, setLoadingData] = useState(false);

	const navigate = useNavigate();
	useEffect(() => {
		if (user) {
			setLoadingData(true);
			axios.get('https://dummyjson.com/carts/user/' + user.id)
				.then(res => res.data)
				.then(data => {
					setCart(data.carts[0]);
					setCartTotal(data.carts[0].total);
					setCartDiscountedTotal(data.carts[0].discountedTotal);
				})
				.catch(err => console.log(err))
				.finally(() => {
					setLoadingData(false);
					// setInterval(() => {
					// 	setLoadingData(false);
					// }, 1000);
				});
		} else {
			navigate('/login');
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
			<Row className="mb-5">
				<Col style={{ padding: '0px 20vw' }}>
					<Form.Control type="text" placeholder="Enter title to search..." onChange={handleSearch} />
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					{loadingData ? <Spinner animation="border" className="my-5" /> :
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
					}
				</Col>
			</Row>
			<Row>
				<Col>
					<h4 className="d-flex flex-row">Total: {loadingData ? <Spinner as='span' size="sm" animation="border" className="my-auto ml-3"/> : total}</h4>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4 className="d-flex flex-row">Discounted Total: {loadingData ? <Spinner as='span' size="sm" animation="border" className="my-auto ml-3"/> : discountedTotal}</h4>
				</Col>
			</Row>
		</Container >
	);
};
