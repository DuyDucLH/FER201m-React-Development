import axios from 'axios';
import { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Login({ setUser }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [usernameError, setUsernameError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [loginError, setLoginError] = useState('');

	const [loadingData, setLoadingData] = useState(false);

	const navigate = useNavigate();

	function handleChange(e) {
		if (e.target.name === 'username') {
			setUsername(e.target.value);
			setUsernameError('');
		}
		if (e.target.name === 'password') {
			setPassword(e.target.value);
			setPasswordError('');
		}
	}

	function handleLogin() {
		setLoginError('');
		if (username === '') {
			setUsernameError('Username is require!');
		}

		if (password === '') {
			setPasswordError('Password is require!');
		}

		if (username !== '' && password !== '') {
			setLoadingData(true);
			
			let userLogin = {
				'username': username,
				'password': password,
			}

			axios.post('https://dummyjson.com/auth/login', userLogin)
				.then(res => {					//Only execute of if receive status 200-299
					setUser(res.data);
					navigate('/carts/user/' + res.data.id);
				})
				.catch(err => {					//Skip then() and execute catch if status code 400-499, 500-599
					setLoginError(err.response.data.message);
				})
				.finally(() =>
					setLoadingData(false)
				);

			// fetch('https://dummyjson.com/auth/login', {
			// 	method: 'POST',
			// 	headers: { 'Content-Type': 'application/json' },
			// 	body: JSON.stringify({
			// 		'username': username,
			// 		'password': password,
			// 	})
			// })
			// 	.then(res => res.json())
			// 	.then(data => {
			// 		if (data.message) {
			// 			setLoginError(data.message);
			// 		} else {
			// 			setUser(data);
			// 			navigate('/carts/user/' + data.id);
			// 		}
			// 	})
			// 	.finally(() =>
			// 		setLoadingData(false)
			// 	);
			
		}
	}

	return (
		<Container>
			<Row className='mb-2 text-center'>
				<Col >
					<h1>Login Form</h1>
				</Col>
			</Row>
			<Row className='mb-2 mx-auto' style={{ width: '20vw' }}>
				<Col>
					<Row className='mb-1'>
						<Form.Group as={Col}>
							<Form.Label>
								Username <span style={{ color: 'red' }}>(*)</span>
							</Form.Label>
							<Form.Control type='text' placeholder='Enter username' name='username' onChange={handleChange} />
						</Form.Group>
					</Row>
					<Row>
						<Col>
							{usernameError !== '' && <Alert variant='danger'>{usernameError}</Alert>}
						</Col>
					</Row>
					<Row className='mb-1'>
						<Form.Group as={Col}>
							<Form.Label>
								Password <span style={{ color: 'red' }}>(*)</span>
							</Form.Label>
							<Form.Control type='password' placeholder='Enter password' name='password' onChange={handleChange} />
						</Form.Group>
					</Row>
					<Row>
						<Col>
							{passwordError !== '' && <Alert variant='danger'>{passwordError}</Alert>}
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className='mb-2 text-center'>
				<Col>
					<Button variant='primary' onClick={handleLogin} >
						{loadingData ? <Spinner as='span' animation='border' size='sm' /> : 'Login'}
					</Button>
				</Col>
			</Row>
			<Row className='mb-2 mx-auto' style={{ width: '20vw' }}>
				<Col>
					{loginError !== '' && <Alert variant='danger'>{loginError}</Alert>}
				</Col>
			</Row>
		</Container>
	);
};
