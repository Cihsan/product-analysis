import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    
    return (
        <nav className='header'>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/blog'>Blog</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/about'>About</NavLink>
            
        </nav>
    );
};

export default Header;


