import { Col, Row, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Comment() {

	const { id } = useParams();

	const [comments, setComments] = useState([]);

	// useEffect(() => {
	// 	//fetch with default GET method
	// 	fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
	// 		.then(response => response.json())
	// 		.then(json => setComments(json));
	// }, []);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");
			const json = await data.json();
			setComments(json);
		}
		fetchData();
	}, [id]);

	return (
		<Row>
			<Col style={{ marginTop: '20px' }}>
				<h2>Comment - postId: {id}</h2>
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
			</Col>
		</Row>
	);
}