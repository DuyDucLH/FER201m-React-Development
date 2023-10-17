import { Col, Row } from 'react-bootstrap';

export default function Header() {
	return (
		<Row style={{
			lineHeight: '30px',
			borderTop: '1px solid black',
			marginTop: '15px'
		}}>
			<Col style={{
				textAlign: 'center'
			}}>
				<h1>Footer Component</h1>
			</Col>
		</Row>
	);
};