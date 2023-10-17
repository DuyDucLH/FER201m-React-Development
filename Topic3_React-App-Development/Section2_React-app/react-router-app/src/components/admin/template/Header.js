import { Col, Row } from 'react-bootstrap';

export default function Header() {
	return (
		<Row style={{
			lineHeight: '50px',
			borderBottom: '1px solid black',
			marginBottom: '15px'
		}}>
			<Col style={{
				textAlign: 'center'
			}}>
				<h1>Header Component</h1>
			</Col>
		</Row>
	);
};