import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comment from "./component/Comment";
import Header from "./component/Header";
import Post from "./component/Post";
import { Container } from 'react-bootstrap';
import PostDetail from './component/PostDetail';
import CommentAdd from './component/CommentAdd';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Post />}></Route>
          <Route path='/posts' element={<Post />}></Route>
          <Route path='/posts/:postId' element={<PostDetail/>}></Route>
          <Route path='/posts/:postId/comments' element={<Comment />}></Route>
          <Route path='/posts/:postId/comments/add' element={<CommentAdd/>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
