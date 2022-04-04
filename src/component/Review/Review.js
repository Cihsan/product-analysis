import React from 'react';

const Review = ({review}) => {
    const {name,pic}=review
    return (
        <div>
            <h1>{name}</h1>
            <img src={pic} alt="" />
        </div>
    );
};

export default Review;