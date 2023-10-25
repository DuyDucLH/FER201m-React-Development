import { Col, Row, Table, Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Comment() {

	const { postId } = useParams();

	const [comments, setComments] = useState([]);

	// sync
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
			.then(response => response.json())
			.then(json => setComments(json))
			.catch(err => console.log(err));
	}, []);

	return (
		<Container>
			<Row style={{ marginTop: '20px' }} className='align-items-end'>
				<Col>
					<h2>Comment - postId: {postId}</h2>
				</Col>
				<Col style={{textAlign: 'right'}}>
					<Link to={`/posts/${postId}/comments/add`}>Create new Comment</Link>
				</Col>
			</Row>
			<Row>
				<Table style={{ marginTop: '30px' }}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Body</th>
						</tr>
					</thead>
					<tbody>
						{comments.map(comment => (
							<tr key={comment.id}>
								<td>{comment.name}</td>
								<td>{comment.email}</td>
								<td>{comment.body}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Row>
			<Button as={Link} to={'/'}>Back To Home</Button>
		</Container>
	);
}