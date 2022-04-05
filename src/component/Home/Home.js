import React from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Review from '../Review/Review';
import '../../assets/style/Home.css'



const Home = () => {
    const[api]=useApi()
    const navigate=useNavigate()
    return (
        <div>
            <div className='front'>
                <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/10/asus-zenbook-duo.jpg" alt="" />

                <div className='content'>
                    <h1>New Some Smart Dual-Screen Display in <span className='hilight'>Laptop</span></h1>
                    <p>Many people like to work with two screens; it's not uncommon to walk into an office and see an external monitor connected to someone's laptop. But with the ever-growing demand for convenience, some company starting to see dual-screen displays introduced into commercial laptops.</p>
                    <button className='btn' onClick={()=>navigate('/desh-board')}>See To Chart</button>
                </div>
            </div>
            <div className='customer-review'>
                <h1 className='h1'>Customer Review ({api.length})</h1>
                {api.slice(0,3).map(review=><Review review={review}></Review>)}
                <button className='btn' onClick={()=>navigate('/reviews')}>See More Review</button>
          </div>
        </div>
            
    );
};

export default Home;
