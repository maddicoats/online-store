import style from './App.module.scss'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart';

function App() {

  return (
    <BrowserRouter>
      <header className={style.App}>
        <NavLink to='/'>
          <h1>SWORD CART ONLINE</h1>
        </NavLink>
        <NavLink to='/cart'>
            <h1 className={style.App_Cart}>🛒</h1>
        </NavLink>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='product/:sid' element={<Product/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
