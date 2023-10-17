import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Header, Footer, Dashboard, Category, Product, CreateProduct } from "./components/admin/Index";
import { useState, useNavigate } from "react";

const smartphones = [
  {
    id: 1,
    name: 'iPhone 14',
    price: 999,
    qtt: 10,
    createDate: '2023-10-12',
    status: 'available',
    actions: ['view', 'delete']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    price: 899,
    qtt: 5,
    createDate: '2023-10-12',
    status: 'available',
    actions: ['view', 'delete']
  },
  {
    id: 3,
    name: 'Google Pixel 7',
    price: 599,
    qtt: 7,
    createDate: '2023-10-12',
    status: 'available',
    actions: ['view', 'delete']
  },
  {
    id: 4,
    name: 'Xiaomi 12 Pro',
    price: 799,
    qtt: 3,
    createDate: '2023-10-12',
    status: 'available',
    actions: ['view', 'delete']
  },
  {
    id: 5,
    name: 'OnePlus 10 Pro',
    price: 699,
    qtt: 2,
    createDate: '2023-10-12',
    status: 'available',
    actions: ['view', 'delete']
  }
];


function App() {
  const [productList, setProductList] = useState(smartphones);
  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <Row>
          <Col md={3}>
            <ul>
              <li>  {/* Sync router: Định tuyến đồng bộ, reload lại trang  */}
                <a href={'/admin'}>Dashboard</a>
              </li>
              <li>  {/* Async router: Định tuyến bất đồng bộ */}
                <Link to={'/admin/category'}>Category</Link>
              </li>
              <li>
                <Link to={'admin/product'}>Product</Link>
              </li>
            </ul>
          </Col>
          <Col md={9}>
            <Routes>
              <Route path={'/admin'} element={<Dashboard />} />
              <Route path={'/admin/category'} element={<Category />} />
              <Route path={'/admin/product'} element={<Product productList={productList}/>} />
              <Route path={'/admin/product/create'} element={<CreateProduct  setProductList={setProductList}/>} />
            </Routes>
          </Col>
        </Row>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
