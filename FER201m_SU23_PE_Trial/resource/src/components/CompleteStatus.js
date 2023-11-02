import { Form } from 'react-bootstrap';

export default function CompleteStatus({ setSelectedStatus }) {

	function handleChangeStatus(e) {
		setSelectedStatus(e.target.value);
	};

	return (
		<>
			<h3>Completed</h3>
			<Form.Check type='radio' name='status' value={'true'} id='Finished' label='Finished' onChange={handleChangeStatus} />
			<Form.Check type='radio' name='status' value={'false'} id='Unfinished' label='Unfinished' onChange={handleChangeStatus} />
			<Form.Check type='radio' name='status' value={'all'} id='All' label='All' onChange={handleChangeStatus} defaultChecked/>
		</>
	);
};
