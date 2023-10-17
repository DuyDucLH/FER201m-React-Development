import { Header, Home, ProductAdd } from './component/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Home />} />
        <Route path="/product" element={<Home />} />
        <Route path="/product/add" element={<ProductAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
