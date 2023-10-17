import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comment from "./component/Comment";
import Header from "./component/Header";
import Post from "./component/Post";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Post />}></Route>
          <Route path='/posts/:id/comments' element={<Comment />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
