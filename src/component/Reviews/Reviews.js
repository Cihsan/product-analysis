import useApi from '../../hooks/useApi';
import AllReview from './AllReview';

const Reviews = () => {
    const [api]=useApi()
    return (
        <div className='customer-review-full'>
            <h1>This is all Reviews</h1> 
                {api.map(data=><AllReview data={data}></AllReview>)}
        </div>
    );
};

export default Reviews;
