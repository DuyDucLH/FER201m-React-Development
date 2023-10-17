import ProductList from './components/product';
import CategoryList from './components/category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //   Yêu cầu: Viết 1 component đặt tên là Category gồm có 1 property nhận dữ liệu là 1 mảng các Category gồm:
  //     id:int
  //     name: String

  // Gọi component này trong App.js cùng với component product
  // => Hiển thị danh sách các Category theo name

  // Nâng cao:
  // Khi người dùng click vào Name của Category thì dữ liệu của Product sẽ filter theo
  // Hint: Sử dụng kỹ thuật Router


  const productData = [
    { 'id': 'P001', 'name': 'Product 1', 'price': 10, 'image': '/assets/images/1.png', 'cat_id': 1 },
    { 'id': 'P002', 'name': 'Product 2', 'price': 20, 'image': '/assets/images/2.png', 'cat_id': 1 },
    { 'id': 'P003', 'name': 'Product 3', 'price': 15, 'image': '/assets/images/3.png', 'cat_id': 2 },
    { 'id': 'P004', 'name': 'Product 4', 'price': 20, 'image': '/assets/images/4.png', 'cat_id': 2 },
    { 'id': 'P005', 'name': 'Product 5', 'price': 15, 'image': '/assets/images/5.png', 'cat_id': 3 },
    { 'id': 'P006', 'name': 'Product 6', 'price': 20, 'image': '/assets/images/6.png', 'cat_id': 3 },
  ];

  const categoryData = [
    { id: 1, name: 'Category B' },
    { id: 2, name: 'Category C' },
    { id: 3, name: 'Category A' },
  ];

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col xl={3}>
            <CategoryList data={categoryData} />  {/* Truyền dữ liệu vào component là 1 object với 1 thuộc tính data: categoryData */}
          </Col>
          <Col xl={{ span: 8, offset: 1 }}>
            <Routes>
              <Route path="/category" element={
                <ProductList data={productData} />
              }></Route>
            </Routes>
          </Col>
        </Row>
      </Container >
    </BrowserRouter>
  );
}

export default App;
