import { Container, Row, Form } from 'react-bootstrap';


export default function CategoryList() {
	return (
		<Container fluid>
			<Row>
				<h4>Filter by: Brand</h4>
			</Row>
			<Row>
				<Form>
					<Form.Group>
						<Form.Check type='radio' id='apple' label='Apple' />
						<Form.Check type='radio' id='samsung' label='Samsung' />
						<Form.Check type='radio' id='oppo' label='OPPO' />
						<Form.Check type='radio' id='huawei' label='Huawei' />
						<Form.Check type='radio' id='microsoft-surface' label='Microsoft Surface' />
						<Form.Check type='radio' id='infinix' label='Infinix' />
					</Form.Group>
				</Form>
			</Row>
		</Container>
	);
}