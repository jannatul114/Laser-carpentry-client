import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handleGiveReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const review = event.target.review.value;
        const ratings = event.target.rating.value;
        const userReview = { name, review, ratings };

        fetch(`https://fierce-sands-20967.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data =>
                toast.success('review added')
            )

    }
    return (
        <div>
            <div class=" w-96 mx-auto shadow-2xl bg-base-100 m-4  p-3 border-2 border-gray-500">
                <form onSubmit={handleGiveReview}>
                    <div class="card-body">
                        <h1 className='text-center text-4xl text-primary'>Give Review</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" value={user?.displayName} name='name' class="input input-bordered" disabled />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">review</span>
                            </label>
                            <input type="text" name='review' placeholder="review" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Rating</span>
                            </label>
                            <input type="number" name='rating' placeholder="rating" class="input input-bordered" required />
                        </div>
                        <div class="form-control mt-6">
                            <input class="btn btn-primary" type='submit' value={'Add Review'} />
                        </div>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;