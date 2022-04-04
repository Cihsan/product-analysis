//import React, { useContext } from 'react';
import useApi from '../../hooks/useApi';
import AllReview from './AllReview';
//import { AllData } from '../Home/Home';


const Reviews = () => {
    const [api]=useApi()
    //const {api}=useContext(AllData)
    
    return (
        <div>
            <h1>This is all Reviews</h1> 
                {api.map(data=><AllReview data={data}></AllReview>)}
        </div>
    );
};

export default Reviews;


//AiOutlineStar
//AiFillStar