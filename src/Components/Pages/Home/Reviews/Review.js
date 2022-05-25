import React from 'react';

const Review = ({ reviews }) => {
    const { review, name, img, ratings } = reviews;

    const getratings = number => {
        const ratings = [];
        for (let i = 0; i < number; i++) {
            ratings.push(<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />)

        }
        return ratings;
    }

    const gettingRatings = getratings(ratings)

    return (
        <div id={reviews?._id} className="carousel-item w-full mx-auto justify-center">
            <div className='lg:w-1/3 p-3 shadow-lg rounded-lg w-full items-center justify-center text-center mx-3'>
                <div className='avatar mx-auto'>
                    <div className='w-24 mask mask-decagon'>
                        <img src={img ? img : 'https://freesvg.org/img/abstract-user-flat-1.png'} alt="" />
                    </div>


                </div>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <h1 className='w-52 mx-auto'>{review}</h1>
                <div className='rating'>




                    {
                        gettingRatings?.map((rating, index) => <p key={index}>{rating}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;