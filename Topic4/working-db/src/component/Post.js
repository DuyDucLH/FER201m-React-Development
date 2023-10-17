import { Col, Row, Card, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './Post.css';


export default function Post() {

	const [posts, setPosts] = useState([]);

	//useEffect(callback, [dependency])
	useEffect(() => {
		//fetch with default GET method
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(json => setPosts(json));
	}, []);

	return (
		<Row>
			<Col style={{ marginTop: '20px' }}>
				<Container>
					<Row>
						<Col>
							<h2>Post</h2>
						</Col>
					</Row>
					<Row>
						{posts.map(post => (
							<Col key={post.id} xs={12} sm={6} md={4} lg={3} style={{padding: '10px 15px'}}>
							<Card style={{ width: '100%'}}>
								<Card.Body>
									<Card.Title className='crop-text-1'>{post.title}</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
									<Card.Text className='crop-text-3'>
											{post.body}
									</Card.Text>
									<Card.Link href={`/posts/${post.id}`}>Detail Post</Card.Link>
									<Card.Link href={`/posts/${post.id}/comments`}>Comments</Card.Link>
								</Card.Body>
							</Card>
						</Col>
						))}
					</Row>
				</Container>
			</Col>
		</Row>
	);
}