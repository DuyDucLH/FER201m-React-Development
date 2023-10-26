import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import ProductAdd from './components/ProductAdd';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/products/add' element={<ProductAdd/>}></Route>
        <Route path='/products/edit/:productId' element={<ProductEdit/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
