// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';
import Register from './Register';
import UserPage from './UserPage';
import ProductsPage from './ProductsPage';
import Cart from './Cart';
import AddProductsPage from './AddProductsPage';
import MemberOffers from './MemberOffers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  console.log(localStorage.getItem('token'))
  return (
    <Router>
    <div className="App"> 
        <Nav token={token} setToken ={setToken}/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login setToken={setToken}/>} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/addproducts" element={<AddProductsPage/>} />
            <Route path="/memberoffers" element={<MemberOffers/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/user" element={<UserPage/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
