import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CompleteStatus from './components/CompleteStatus';
import List from './components/List';
import User from './components/User';

function App() {

  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isSort, setIsSort] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:9999/user")
      .then(res => {
        setUsers(res.data)
        axios.get("http://localhost:9999/todo")
          .then(res => {
            setTodos(res.data)
            setIsUpdated(false);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [isUpdated]);

  //Filter todos
  let filteredTodos = todos.filter(todo => {
    if (selectedUsers.size === 0) {
      return true;
    } else {
      return selectedUsers.has(todo.userId);
    }
  }).filter(todo => {
    if (selectedStatus === 'all') {
      return true;
    } else if (selectedStatus === 'true') {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  })

  filteredTodos = isSort ? filteredTodos.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  }) : filteredTodos;

  return (
    <Container>
      <Row>
        <Col md={12} lg={9} className='order-md-1 order-sm-1 order-xs-1'>
          <List filteredTodos={filteredTodos} users={users} isSort={isSort} setIsSort={setIsSort} setUpdateTodo={setIsUpdated} />
        </Col>
        <Col className='order-lg-1'>
          <Row >
            <Col xs={6} sm={6} md={6} lg={12} className='mb-2'>
              <User users={users} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
            </Col>
            <Col>
              <CompleteStatus setSelectedStatus={setSelectedStatus} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
