import React from 'react';
import { useQuery } from 'react-query';
import Review from './Review';

const Reviews = () => {

    const { isLoading, error, data: reviews } = useQuery('review', () =>
        fetch('https://fierce-sands-20967.herokuapp.com/reviews').then(res =>
            res.json()
        )
    )
    return (
        <div className='my-5'>
            <h1 className='text-center text-4xl font-bold text-orange-500'>What Our Clients says? </h1>

            <div class="carousel w-full py-6">
                {
                    reviews?.length > 0 && reviews?.map(review => <Review key={review._id} reviews={review} />)
                }
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                {reviews?.length > 0 && reviews.map((review, index) => <a key={review?._id} href={`#${review?._id}`} className="btn btn-sm bg-orange-600 rounded-full">{index + 1}</a>)
                }
            </div>
        </div>
    );
};

export default Reviews;