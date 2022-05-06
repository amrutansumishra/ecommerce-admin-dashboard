import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './logo.png';
const Nav =()=>{
    return (
    
        <nav className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt='LOGO'/>
            </div>
            <ul className='navbar_links'>      
                <li><Link to="/">Products</Link></li>
                <li><Link to="/update-product">Update Product</Link></li>
                <li><Link to="/add-product">Add Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>       
            <ul className='navbar_login'>                
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>                   
            </ul>                   
        </nav>
    );
}

export default Nav;
