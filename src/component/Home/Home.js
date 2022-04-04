import React from 'react';
import useApi from '../../hooks/useApi';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const[api]=useApi()
    
    return (
        <div className='container'>
            <div className='front'>
                
                <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/10/asus-zenbook-duo.jpg" alt="" />
                
                <div>
                    <h1>New Some Smart <br /> Dual-Screen Display <br /> in Laptop</h1>
                    <p>Many people like to work with two screens; it's not uncommon to walk into an office and see an external monitor connected to someone's laptop. But with the ever-growing demand for convenience, some company starting to see dual-screen displays introduced into commercial laptops.</p>
                    <button>Click To Review</button>
                </div>
            </div>
            <h1>This Is Home</h1>
          <div>
                {api.map(review=><Review review={review}></Review>)}
          </div>
        </div>
            
    );
};

export default Home;

// icon
//BsFillTelephonePlusFill
//BsSearch
//GiShoppingBag
//IoGitCompare
//SiReact
//FaUserLock
//FaUserCheck
//MdLocationPin