import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3T4dLlF7z365XHidsp4FNEJGug9cnTCIzLWBaUSl1CL0XuWA9ef5mXdtMgucWZEdFIzedd0gt1pIQwXP16Uf4p00ucnAjiC6');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='m-3'>
            <div class="card max-w-md w-50 bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Hello, {order.name}</h2>
                    <p>Pay for: {order.tool}</p>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Cost amount: {order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={order} />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;