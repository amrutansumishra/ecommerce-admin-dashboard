import React from 'react';
import { Login, Register, UpdateProduct, AddProduct,Profile,Products,Footer } from './components'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Nav';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
      <Navbar/>
      <Routes>  
      <Route path="/" element={<Products/>} />
        <Route path="/update-product/:id" element={<UpdateProduct/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/profile" element={<Profile/>} />      
      <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>       
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
