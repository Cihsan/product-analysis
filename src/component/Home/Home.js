import React from 'react';
import useApi from '../../hooks/useApi';

const Home = () => {
    const[api,setApi]=useApi()
    console.log(api);
    return (
        <div>
            <h1>This Is Home</h1>
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