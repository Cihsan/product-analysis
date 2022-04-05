import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../assets//style/Header.css'
/* import '../../assets/Home.css' */
import image from '../../assets/image/logo.png'
const Header = () => {
    
    return (
        <nav className='header'>
            <div className='logoName'>
           <Link to='/'> <img src={image} alt="" /></Link>
            <h1 style={{margin:'5px' }}>Tech <span style={{color:'#002255'}}>Review</span> </h1> 
            </div>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/reviews'>Reviews</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/desh-board'>Desh Board</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/blog'>Blog</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/about'>About</NavLink>
            
        </nav>
    );
};

export default Header;


