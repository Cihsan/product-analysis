import React from 'react';
import { GoAlert} from 'react-icons/go';
const NotFound = () => {
    return (
        <div>
            <h1 style={{textAlign:'center', color:'red'}}><GoAlert></GoAlert> 404</h1>
            <p>You Can try other Path</p>
        </div>
    );
};

export default NotFound;