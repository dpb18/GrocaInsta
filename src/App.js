
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Assets/Mid-June Sale.jpg'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/groceries' element={<ShopCategory banner={Banner} category="groceries"/>}/>
        <Route path='/vegetables' element={<ShopCategory banner={Banner} category="vegetables"/>}/>
        <Route path='/fruits' element={<ShopCategory banner={Banner} category="fruits"/>}/>
        <Route path='product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
