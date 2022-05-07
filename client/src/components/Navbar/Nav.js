import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import logo from './logo.png';
const Nav =()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate('/register');
    }
    return (
    
        <nav className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt='LOGO'/>
            </div>
            <ul className='navbar_links'>    
            {auth && (<ul className='navbar_links'>      
            <li><Link to="/">Products</Link></li>
                <li><Link to="/add-product">Add Products</Link></li>
                   </ul>)
                   }  
        
            </ul>       
            <ul className='navbar_login'>                
            {auth?<><li><Link to="/profile">{JSON.parse(auth).name}</Link></li>
                   <li><Link onClick={logout} to="/register">Logout</Link></li></>
                   :<><li><Link to="/register">Register</Link></li>
                   <li><Link to="/login">Login</Link></li> </>
                   }                  
            </ul>                   
        </nav>
    );
}

export default Nav;
