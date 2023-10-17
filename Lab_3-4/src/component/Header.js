import { Col, Row, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<Container fluid>
			<Row>
				<Col>
					<h2 style={{ textAlign: 'center', padding: '5px 0px' }} className='mt-2 mb-2'>Front-End Development with React</h2>
				</Col>
			</Row>
			<Row style={{ backgroundColor: 'purple' }}>
				<Navbar />
			</Row>
		</Container>
	);
}

function Navbar() {
	return (
		<Container>
			<Nav className='justify-content-start'>
				<Nav.Item>
					{/* The AS attribute in React Bootstrap's <Nav.Link> component allows you to render the link as a different component rather than the default <a> tag. */}
					<Nav.Link as={NavLink} to={'/'} style={({ isActive }) => styleActiveLink(isActive)}>
						Home
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={NavLink} to={'/category'} style={({ isActive }) => styleActiveLink(isActive)}>
						Category
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={NavLink} to={'/product'} style={({ isActive }) => styleActiveLink(isActive)}>
						Product
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Container>
	);
}

function styleActiveLink(isActive) {
	return {
		fontWeight: isActive ? "bold" : "",
		backgroundColor: isActive ? "orange" : "",
		color: "white",
		textDecoration: 'none',
		// outline: isActive ? "0px solid red" : "",
		boxShadow: isActive ? "0px 5px 0px 0px red" : "",
	};
}