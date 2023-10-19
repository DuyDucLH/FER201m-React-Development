import { Row, Col, Form, Table, Button, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function ProductList() {
	return (
		<Container>
			<Row>
				<Col style={{ padding: '3vh 0px' }}>
					<h2 style={{ textAlign: 'center' }}>List of Products</h2>
				</Col>
			</Row>
			<Row>
				<Col style={{ textAlign: 'center', padding: '2vh 10vw 0px 10vw' }}>
					<Form.Control type='input' placeholder='Enter title to search...' />
				</Col>
			</Row>
			<Row>
				<Col style={{ padding: '4vh 0px 0px 0px' }}>
					<ProductTable />
				</Col>
			</Row>
		</Container>
	);
}

export function ProductTable() {
	return (
		<Container fluid>
			<Row>
				<Col style={{ textAlign: 'right' }}>
					<Link to={'/product/add'}>Create Product</Link>
				</Col>
			</Row>
			<Row>
				<Col style={{ padding: '10px 0px' }}>
					<Table responsive={'sm'}>
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Description</th>
								<th>Price</th>
								<th>Discount(%)</th>
								<th>Brand</th>
								<th>Category</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>iPhone 9</td>
								<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</td>
								<td>549</td>
								<td>12.96</td>
								<td>Apple</td>
								<td>smartphones</td>
							</tr>
							<tr>
								<td>1</td>
								<td>iPhone 9</td>
								<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</td>
								<td>549</td>
								<td>12.96</td>
								<td>Apple</td>
								<td>smartphones</td>
							</tr>
							<tr>
								<td>1</td>
								<td>iPhone 9</td>
								<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</td>
								<td>549</td>
								<td>12.96</td>
								<td>Apple</td>
								<td>smartphones</td>
							</tr>
							<tr>
								<td>1</td>
								<td>iPhone 9</td>
								<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</td>
								<td>549</td>
								<td>12.96</td>
								<td>Apple</td>
								<td>smartphones</td>
							</tr>
							<tr>
								<td>1</td>
								<td>iPhone 9</td>
								<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</td>
								<td>549</td>
								<td>12.96</td>
								<td>Apple</td>
								<td>smartphones</td>
							</tr>
							<tr>
								<td>1</td>
								<td>iPhone 9</td>
								<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</td>
								<td>549</td>
								<td>12.96</td>
								<td>Apple</td>
								<td>smartphones</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
}

export function ProductAdd() {
	return (
		<Container style={{ padding: '0px 10vw' }}>
			<Row>
				<Col style={{ textAlign: 'center', padding: '20px 0px' }}>
					<h3>Create a new Product</h3>
				</Col>
			</Row>
			<Form>
				<Row style={{ padding: '5px 0px' }}>
					<Col>
						<Form.Group>
							<Form.Label>ID</Form.Label>
							<Form.Control type={'text'} name='id' value={0} readOnly />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label required>Title <span style={{ color: 'red' }}> *</span></Form.Label>
							<Form.Control type={'text'} required name='name' />
							<p style={{ color: 'red' }}>Please enter the Title</p>
						</Form.Group>
					</Col>
				</Row>
				<Row style={{ padding: '5px 0px' }}>
					<Col>
						<Form.Group>
							<Form.Label required>Price <span style={{ color: 'red' }}> *</span></Form.Label>
							<Form.Control type={'number'} name='price' />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label required>Discount <span style={{ color: 'red' }}> *</span></Form.Label>
							<Form.Control type={'number'} name='discount' />
						</Form.Group>
					</Col>
				</Row>
				<Row style={{ padding: '5px 0px' }}>
					<Col>
						<Form.Group>
							<Form.Label>Rating</Form.Label>
							<Form.Control type={'text'} name='id' />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label>Stock</Form.Label>
							<Form.Control type={'text'} required name='name' />
						</Form.Group>
					</Col>
				</Row>
				<Row style={{ padding: '5px 0px' }}>
					<Col>
						<Form.Group >
							<Form.Label>Brand</Form.Label>
							<Form.Control as={'select'}>
								<option>Apple</option>
								<option>Samsung</option>
								<option>Huawei</option>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label>Category</Form.Label>
							<Form.Control as={'select'}>
								<option>smartphones</option>
								<option>tablets</option>
								<option>laptops</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
				<Row style={{ padding: '5px 0px' }}>
					<Col>
						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
					</Col>
				</Row>
				<Row style={{ padding: '5px 0px' }}>
					<Col style={{ textAlign: 'right', padding: '0px 5px' }}>
						<Button variant={'primary'} type='submit' style={{ width: '150px' }}>Add</Button>
					</Col>
					<Col style={{ padding: '0px 5px' }}>
						<Button variant={'danger'} as={NavLink} to={'/'} style={{ width: '150px' }}>Back to Home</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}