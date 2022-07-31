import style from './App.module.scss'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product/Product';

function App() {

  return (
    <BrowserRouter>
      <NavLink className={style.App} to='/'>
          <h1>SWORD CART ONLINE</h1>
      </NavLink>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='product/:id' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
