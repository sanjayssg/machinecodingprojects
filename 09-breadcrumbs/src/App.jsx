import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import ProductListing from './pages/ProductListing';
import BreadCrumbs from './components/BreadCrumbs';

function App() {

  return (
    <BrowserRouter>
    <div className='app'>
     <h1>Frendz Corporation</h1>
     <BreadCrumbs />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/products" element={<ProductListing />} />
       <Route path="/products/:id" element={<ProductDetails />} />
     </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
