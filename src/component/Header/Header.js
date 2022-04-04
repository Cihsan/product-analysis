import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    
    return (
        <nav className='header'>
            <div><img src="../..src/assets/image/logo.png" alt="" /></div>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/reviews'>Reviews</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/desh-board'>Desh Board</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/blog'>Blog</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/about'>About</NavLink>
            
        </nav>
    );
};

export default Header;


