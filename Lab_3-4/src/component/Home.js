import { Col, Container, Row } from 'react-bootstrap'
import { CategoryList, ProductList } from './Index'


export default function Home() {
	return (
		<Container>
			<Row>
				<Col md={3} style={{ padding: '20px 5px' }}>
					<CategoryList />
				</Col>
				<Col md={9} style={{ padding: '0px 5px' }}>
					<ProductList />
				</Col>
			</Row>
		</Container>
	);
}



