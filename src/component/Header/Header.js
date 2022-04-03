import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    
    return (
        <div className='header'>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/about'>About</NavLink>
        </div>
    );
};

export default Header;
//<NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>Home</NavLink>


