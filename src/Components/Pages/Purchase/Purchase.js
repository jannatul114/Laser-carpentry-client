

import ItemDetails from './ItemDetails';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const Purchase = () => {
    const { id } = useParams();
    const [item, setTool] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://fierce-sands-20967.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, []);
    const [user] = useAuthState(auth);

    const handlePurchase = handleSubmit(async (data, event) => {
        event.preventDefault();
        console.log(data);

        fetch(`https://fierce-sands-20967.herokuapp.com/orders?email=${data.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        event.target.reset()
    });

    return (
        <section className='py-10 px-2'>
            <h2 className='text-center text-4xl text-orange-500 font-bold my-5'>You are booking for: {item.name}</h2>

            {
                item?.img ? <ItemDetails item={item} /> : <Loading />
            }


            <div className='p-3 my-10'>
                <form onSubmit={handlePurchase} className='lg:w-1/2 w-full mx-auto shadow-lg p-4 rounded-xl'>
                    <h1 className="text-3xl font-bold pb-3 text-center text-orange-400">You are buying: {item.name}</h1>

                    <div className=''>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>

                            <input type="text" value={user?.displayName} readOnly {...register("name")} className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>

                            <input type="email" value={user?.email} readOnly {...register("email")} className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>

                        <input type="text" placeholder="Your address" {...register("address", { required: true })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">{errors.address?.type === 'required' && "address is required"}</span>
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>

                        <input type="number" placeholder="Your Phone" {...register("Phone", { required: true })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">{errors.Phone?.type === 'required' && "Phone is required"}</span>
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Order Quanitity</span>
                        </label>

                        <input type="number" placeholder="Your Order" {...register("order", {
                            required: true,
                            max: {
                                value: item?.quantity,
                                message: 'Must be under available quantity'
                            },
                            min: {
                                value: item?.order,
                                message: 'Must be over or equal to minimum order quantity'
                            }
                        })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">
                                {errors.order?.type === 'required' && "Order Quantity is required"}
                                {errors?.order?.message}
                            </span>
                        </label>
                    </div>

                    <input type="submit" disabled={errors?.order} className="btn w-full btn-primary" value="Purchase" />
                </form>
            </div>
        </section>
    );
};

export default Purchase;














