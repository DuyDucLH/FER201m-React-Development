import { Form } from 'react-bootstrap';

export default function User({ users = [], selectedUsers, setSelectedUsers }) {

	function handleSelectUser(e) {
		const newSelectedUsers = new Set(selectedUsers);
		if (newSelectedUsers.has(parseInt(e.target.value))) {
			newSelectedUsers.delete(parseInt(e.target.value));
		} else {
			newSelectedUsers.add(parseInt(e.target.value));
		}
		setSelectedUsers(newSelectedUsers);
	}

	return (
		<>
			<h3>Users</h3>
			{
				users.map((u) => {
					return <Form.Check key={u.id} type='checkbox' id={u.name} label={u.name} name='users' value={u.id} onClick={handleSelectUser} />
				})
			}
		</>
	);
};
