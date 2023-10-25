import { Col, Row, Card, Container, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';


export default function Post() {

	const [posts, setPosts] = useState([]);
	const [comments, setComments] = useState([]);
	const [users, setUsers] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState([]);
	const [searchInputs, setSearchInputs] = useState({});

	const handleSearch = (e) => {
		setSearchInputs(prev => (
			{
				...prev,
				[e.target.name]: e.target.value
			}
		));
	}

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(json => {
				setPosts(json);
				setFilteredPosts(json);
			})
			.catch(err => console.log(err));
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then(response => response.json())
			.then(json => setComments(json))
			.catch(err => console.log(err));
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(json => setUsers(json))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		setFilteredPosts(posts.filter(post => {
		  return (
			(searchInputs.title ? post.title.startsWith(searchInputs.title) : true) &&
			((searchInputs.userId && searchInputs.userId !== '0') ? (post.userId === parseInt(searchInputs.userId)) : true)
		  )
		}))
	  }, [searchInputs])


	return (
		<Row>
			<Col style={{ marginTop: '20px' }}>
				<Container>
					<Row>
						<Col>
							<h2>Post</h2>
						</Col>
						<Col>
							<Form.Control type="text" name='title' placeholder="Enter title to search..." onChange={handleSearch} />
						</Col>
						<Col>
							<Form.Control as={'select'} onChange={handleSearch} name='userId'>
								<option value={0}>All user</option>
								{users.map(user => (
									<option key={user.id} value={user.id}>{user.username}</option>
								))}
							</Form.Control>
						</Col>
					</Row>
					<Row>
						{filteredPosts.map(post => (
							<Col key={post.id} xs={12} sm={6} md={4} lg={3} style={{ padding: '10px 15px' }}>
								<Card style={{ width: '100%' }}>
									<Card.Body>
										<Card.Title className='crop-text-1'>{post.title}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
										<Card.Text className='crop-text-3'>
											{post.body}
										</Card.Text>
										<Card.Link as={Link} to={`/posts/${post.id}`}>Detail Post</Card.Link>
										<Card.Link as={Link} to={`/posts/${post.id}/comments`}>Comments ({comments.filter(comment => comment.postId === post.id).length})</Card.Link>
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