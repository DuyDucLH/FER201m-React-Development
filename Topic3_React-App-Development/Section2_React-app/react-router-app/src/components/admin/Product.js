import { Row, Col, Table, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Product({ productList }) {
	return (
		<>
			<Row>
				<Col style={{ textAlign: 'right' }}>
					<Link to={'/admin/product/create'}>Create new</Link>
				</Col>
			</Row>
			<Row>
				<Col>
					<Table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Price</th>
								<th>Qtt</th>
								<th>Create Date</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{productList.map((product) => (
								<ProductItem key={product.id} product={product} />
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
		</>
	);
};

function ProductItem({ product }) {
	return (
		<tr>
			<td>{product.id}</td>
			<td>{product.name}</td>
			<td>{product.price}</td>
			<td>{product.qtt}</td>
			<td>{product.createDate}</td>
			<td>{product.status}</td>
			<td>
				{product.actions.map((action, index) => (
					<Button key={index} variant={'primary'}>{action}</Button>
				))}
			</td>
		</tr>
	);
}

export function CreateProduct({ setProductList }) {
	
	const navigate = useNavigate();
	return (
		<Form id='add-product-form'>
			<Row>
				<Col>
					<Form.Group>
						<Form.Label>ID</Form.Label>
						<Form.Control type={'text'} name='id' />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type={'text'} required name='name' />
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control type={'text'} name='price' />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group>
						<Form.Label>Qtt</Form.Label>
						<Form.Control type={'number'} name='qtt' />
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Group style={{ marginTop: '10px' }}>
						<Form.Label style={{ marginRight: '15px' }}>Status</Form.Label>
						<Form.Check inline type='radio' label='Yes' id='Yes' name='status' />
						<Form.Check inline type='radio' label='No' id='No' name='status'/>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col style={{ textAlign: 'center' }}>
					<Button style={{ marginRight: '5px' }} onClick={() => handleAddProduct(setProductList, navigate)}> Add </Button>
					<Button style={{ marginLeft: '5px' }} type='reset'> Reset </Button>
				</Col>
			</Row>
		</Form>
	);
}

function handleAddProduct({ setProductList, navigate }) {

	const formData = new FormData(document.getElementById('add-product-form'));
	const product = {};
	for (let [key, value] of formData.entries()) {
		product[key] = value;
	}
	setProductList(productList => [...productList, product]);
	navigate('/admin/product');
}