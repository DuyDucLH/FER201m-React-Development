import { useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function PostDetail() {
	const { postId } = useParams();
	const [postDetail, setPostDetail] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
			.then(response => response.json())
			.then(json => setPostDetail(json))
			.catch(err => console.log(err));
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(json => setUsers(json))
			.catch(err => console.log(err));
	}, []);


	const user = users.find(user => user.id === postDetail.userId);

	return (
		<div>
			<h2>Post Detail - postId: {postId}</h2>
			<ul>
				<li>Post Id: {postDetail.id}</li>
				<li>User: {user !== undefined ? user.name : ''}</li>
				<li>title: {postDetail.title}</li>
				<li>body: {postDetail.body}</li>
			</ul>
			<Button as={Link} to={'/'}>Back To Home</Button>
		</div>
	);
};
