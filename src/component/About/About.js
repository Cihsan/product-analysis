import React from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate=useNavigate()
    return (
        <div>
            <h1>This is About Page</h1>
            
            <button onClick={()=>navigate('/')}>Click <AiOutlineRollback></AiOutlineRollback> Now</button>
            
        </div>
    );
};

export default About;