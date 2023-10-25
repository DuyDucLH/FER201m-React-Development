import { Alert, Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SunEditor from 'suneditor-react';
import { useState } from 'react';

export default function CommentAdd(params) {
	const { postId } = useParams();

	const [message, setMessage] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
	}

	return (
		<Container style={{ textAlign: 'center' }}>
			<Row>
				<Col>
					<h3>Create new Comment</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						{JSON.stringify(message) !== '{}' && <Alert variant={message.color}>
							{message.content}
						</Alert>}
						<Table className="table-borderless">
							<tbody>
								<tr>
									<td>ID <span style={{ color: 'red' }}>(*)</span></td>
									<td>
										<Form.Control type="text" name="id" value={postId} readOnly />
									</td>
								</tr>
								<tr>
									<td>Name <span style={{ color: 'red' }}>(*)</span></td>
									<td>
										<Form.Control type="text" name="name" required />
									</td>
								</tr><tr>
									<td>Title <span style={{ color: 'red' }}>(*)</span></td>
									<td>
										<Form.Control type="text" name="title" required />
									</td>
								</tr>
								<tr>
									<td>Body <span style={{ color: 'red' }}>(*)</span></td>
									<td style={{ textAlign: 'left' }}>
										<SunEditor name="body" height="30vh" placeholder="Enter new comment here..." setDefaultStyle="font-family: cursive; font-size: 16px;" />
									</td>
								</tr>
							</tbody>
						</Table>
						<Button style={{ margin: '0px 5px' }} type="reset" as={Link} to={`/posts/${postId}/comments`}>Cancel</Button>
						<Button variant="primary" style={{ margin: '0px 5px' }} type="submit">Create</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
