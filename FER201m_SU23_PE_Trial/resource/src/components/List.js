import { Button, Col, Row, Table, Container } from 'react-bootstrap';
import axios from 'axios';

export default function List({ filteredTodos = [], users = [], isSort, setIsSort, setUpdateTodo }) {

	function handleClickSort(e) {
		setIsSort(!isSort);
	}

	function handleClickChange(todo) {
		axios.patch(`http://localhost:9999/todo/${todo.id}`, {
			completed: !todo.completed
		}).then(res => console.log(res.status));
		alert(`Change success`);
		setUpdateTodo(true);
	}

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Todo List</h1>
			Sort: <Button onClick={handleClickSort}>{isSort ? 'Descending by Title' : 'Ascending by Title'}</Button>
			<Table>
				<thead>
					<tr>
						<th>No.</th>
						<th>Title</th>
						<th>User</th>
						<th>Completed</th>
						<th>Change status</th>
					</tr>
				</thead>
				<tbody>
					{
						filteredTodos.map(t => {
							return (
								<tr key={t.id}>
									<td>{t.id}</td>
									<td>{t.title}</td>
									<td>
										{
											users.find(u => u.id === t.userId).name
										}
									</td>
									{t.completed ? <td style={{ color: 'blue' }}>Finished</td> : <td style={{ color: 'red' }}>Unfinished</td>}
									<td>
										<Button variant='success' onClick={() => handleClickChange(t)}>Change</Button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</Table>
		</>
	)
};
