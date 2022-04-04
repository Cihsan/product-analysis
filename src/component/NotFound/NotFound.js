import React from 'react';
import { GoAlert} from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate=useNavigate()
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{ color:'red', margin:'30px',fontSize:'150px'}}><GoAlert></GoAlert> 404</h1>
        <button className='btn' onClick={()=>navigate('/')}>Back to Home</button>
        </div>
    );
};

export default NotFound;